<template>
<div class="theLabel">
    <div class="top">
        <div class="title">
            <Title />
            <!-- 顶部标题组件 -->
        </div>
        <div class="type">
            <TopTypeChose :type="this.type" :changeType="this.changeType" />
            <!-- 顶部支出收入切换组件 公有组件-->
        </div>
    </div>
    
    <div 
    v-if="showLabelListFlag"
    :class="
        showModifyFlag ? 'center-modify' : 
        showDeleteFlag ? 'center-delete' : null
    "
    >
        <CenterLabelList 
            :labelsList="this.labelsList"
            :type="this.type"
            :choseModifyLabel="this.choseModifyLabel"
            :choseAddLabel="this.choseAddLabel"

            :choseDeleteLabel="this.choseDeleteLabel"
            :timeStart="this.timeStart"
            :timeEnd="this.timeEnd"

            :showDeleteFlag="this.showDeleteFlag"
            :showModifyFlag="this.showModifyFlag"
        />
        <!-- 标签列表组件 -->
    </div>

    <transition name="bottomBox">
        <div v-show="showDeleteFlag" class="deleteLabel">
            <DeleteLabel
                :deleteIdListInit="this.deleteIdListInit"
                :beTrueDelete="this.beTrueDelete"
            />
            <!-- 标签删除弹出框组件 -->
        </div>    
    </transition>

    <transition name="bottomBox">
        <div v-show="showModifyFlag" class="modifyLabel">
            <ModifyOrAddLabel
                :modifyOrAddInData="this.modifyOrAddInData"
                :chosedLabel="this.chosedLabel"
                :titleIcon="this.titleIcon"
                :titleText="this.titleText"
                :deleteIdListInit="this.deleteIdListInit"
                :modifyLabel="this.modifyLabel"

                :setHref="this.setHref"
                :setText="this.setText"
                :modify="this.modify"
                :modifyInit="this.modifyInit"
                :iconListInit="this.iconListInit"
                :choseIcon="this.choseIcon"
                :iconList="this.iconList"
            />
            <!-- 标签修改弹出框组件 -->
        </div>
    </transition>

</div>
</template>

<script>
import TopTypeChose from '@/components/Public/TopTypeChose.vue'
import Title from '@/components/Label/Top/Title'
import CenterLabelList from '@/components/Label/Center/CenterLabelList.vue'
import ModifyOrAddLabel from '@/components/Label/Bottom/ModifyOrAddLabel.vue'
import DeleteLabel from '@/components/Label/Bottom/DeleteLabel.vue'

import labelsListModel from '@/models/labelsListModel'
import IconListModel from '@/models/IconListModel'


export default {
name:'Label',
components:{
    TopTypeChose,
    Title,
    CenterLabelList,
    ModifyOrAddLabel,
    DeleteLabel,
},
data(){
    return{
        type:'支出',//选择支出收入模式
        

        showModifyFlag:false,//控制修改标签框显示的bool
        showDeleteFlag:false,//控制删除标签框显示的bool
        showLabelListFlag:true,//用于控制视图标签列表的实时反馈刷新
        
        labelsList:[],//显示在视图中的标签列表，取决于type
        chosedLabel:{},//存放选择的标签的容器
        modifyLabel:{
            href:'',
            text:'',
        },//用于存放修改后但为保存的标签内容
        deleteLabelList:[],//用于存放被选中需要删除的标签
        deleteIdList:[],//用于存放需要删除的标签的id
        iconList:[],//存放图标的变量

        addOrModifyType: true,
        titleText:'',
        titleIcon:'',
        //上述三个变量用于控制修改或添加标签弹出框的文字显示内容
    }
},
computed:{
    index(){
        if(this.type === '支出'){
            return 0
        }else if(this.type === '收入'){
            return 1
        }else{
            return null
        }
    },//当前支付或收入模式
},
methods:{
    changeType(){
        if(this.type === '支出'){
            this.type = '收入'
            return
            
        }
        if(this.type === '收入'){
            this.type = '支出'
            return
            
        }
    },//更改支付收入模式，控制标签列表显示
    choseLabel(value){
        let index = this.index
        if(!value.activeFlag){
            for(let i = 0;i<this.labelsList[index].length;i++){
                this.labelsList[index][i].activeFlag = false
            }
            value.activeFlag = true
            this.showModify(value)
            this.chosedLabel = value
        }else{
            value.activeFlag = false
            this.showModifyFlag = false
        }
        if(this.addOrModifyType){
            this.titleText = '修改标签'
            this.titleIcon = '更改图标'
        }else{
            this.titleText = '添加标签'
            this.titleIcon = '选择图标'
        }
    },//选择标签
    choseModifyLabel(value){
        this.addOrModifyType = true
        this.choseLabel(value)
    },//选择进行修改标签
    showModify(){
        this.showModifyFlag = true
    },//显示修改框
    init(){
        this.labelsList = labelsListModel.fetch()
        let index = this.index
        for(let i = 0;i<this.labelsList[index].length;i++){
            this.labelsList[index][i].activeFlag = false
        }
    },//页面获取时。初始化标签列表
    modifyOrAddInData(object){
        if(this.addOrModifyType){
            let index = this.index
            this.labelsList[index][object.id] = object
            this.showLabelListFlag = false
            let _this = this
            setTimeout(function(){
                _this.showLabelListFlag = true
            }, 0);
            
            labelsListModel.save(this.labelsList)
        }else{
            if(object.text.trim() === ''){
                alert('还没输入标签名哦~')
                return
            }
            if(object.href === `#Add to`){
                alert('还没选择图标哦~')
                return
            }

            let index = this.index
            for(let i=0;i<this.labelsList[index].length;i++){
                if(object.text === this.labelsList[index][i].text){
                    alert('新增标签名已存在~')
                    return
                }
            }
            let length = this.labelsList[index].length
            
            object.id = length
            object.deleteFlag = false
            object.activeFlag = false
            console.log(object)
            this.labelsList[index].push(object)
            this.showLabelListFlag = false
            let _this = this
            setTimeout(function(){
                _this.showLabelListFlag = true
            }, 0);
            labelsListModel.save(this.labelsList)
            this.showModifyFlag = false
        }
        
    },//存储修改或添加的标签信息至model的data
    showDelete(){
        this.showModifyFlag = false
    },//显示删除框
    timeStart(label){
        this.timer = true
        setTimeout(() => {
            if(this.timer){
                this.choseDeleteLabel(label)
                if(label.deleteFlag === true && label.activeFlag === true){
                    this.showDeleteFlag = true
                }
            }
        }, 200)
    },
    timeEnd(){
        setTimeout(() => {
            this.timer = false
        }, 100);
    },//长按选择删除标签的辅助方法
    choseDeleteLabel(value){
        if(value.deleteFlag === true && value.activeFlag === true){
            value.deleteFlag = false
            value.activeFlag = false
            this.deleteIdListRemove(value.id)
            return
        }else{
            value.deleteFlag = true
            value.activeFlag = true
            this.deleteIdListAdd(value.id)
        }
    },//长按选择删除标签的方法
    deleteIdListAdd(id){
        if(this.deleteIdList.indexOf(id) === -1){
            this.deleteIdList.push(id)
            this.deleteIdList.sort()
        }
    },//向删除标签的id列表添加
    deleteIdListRemove(id){
        if(this.deleteIdList.indexOf(id)||this.deleteIdList.indexOf(id) === 0){
            if(this.deleteIdList.length>1){
                this.deleteIdList.splice(this.deleteIdList.indexOf(id),1)
            }else{
                this.deleteIdList = []
            }
        }
    },//删除标签的id列表中，指定的id
    deleteIdListInit(){
        for(let i=0;i<this.labelsList[0].length;i++){
            this.labelsList[0][i].activeFlag = false
            this.labelsList[0][i].deleteFlag = false
        }
        for(let i=0;i<this.labelsList[1].length;i++){
            this.labelsList[1][i].activeFlag = false
            this.labelsList[1][i].deleteFlag = false
        }
        this.deleteIdList = []
        this.showDeleteFlag = false
        this.showModifyFlag = false
    },//取消删除的重置标签方法
    beTrueDelete(){
        let index = this.index
        for(let i=0;i<this.labelsList[index].length;i++){
            if(this.deleteIdList.indexOf(this.labelsList[index][i].id)!==-1){
                this.labelsList[index].splice(i,1)
                i--
            }
        }
        this.deleteIdListInit()
        for(let i=0;i<this.labelsList[index].length;i++){
            this.labelsList[index][i].id = i
        }
        labelsListModel.save(this.labelsList)
    },//删除标签的方法
    choseAddLabel(value){
        this.addOrModifyType = false
        this.choseLabel(value)
    },//选择进行添加标签

    setHref(value){
        this.modifyLabel.href = value
    },//提供给修改标签的组件用于获取修改后的href
    setText(value){
        this.modifyLabel.text = value
    },//提供给修改标签的组件用于获取修改后的text
    modify(){
        if(this.chosedLabel.href === this.modifyLabel.href && this.chosedLabel.text === this.modifyLabel.text){
            alert('标签未做修改~')
            return
        }
        let index = this.index
        for(let i=0;i<this.labelsList[index].length;i++){
            if(this.modifyLabel.text === this.labelsList[index][i].text){
                alert('标签名已存在~')
                return
            }
        }
        if(this.modifyLabel.text.trim() === ''){
            alert('标签名不能为空')
            return
        }
        if(this.chosedLabel.href !== this.modifyLabel.href){
            this.chosedLabel.href = this.modifyLabel.href
        }
        if(this.chosedLabel.text !== this.modifyLabel.text){
            this.chosedLabel.text = this.modifyLabel.text
        }
        this.modifyOrAddInData(this.chosedLabel)
    },//确定修改后，将被选中的标签的内容更改为修改的标签内容
    modifyInit(){
        this.modifyLabel.href = this.chosedLabel.href
        this.modifyLabel.text = this.chosedLabel.text
    },//修改标签初始化
    iconListInit(){
        IconListModel.init()
        this.iconList = IconListModel.data
    },//图标列表初始化
    choseIcon(label){
        this.setHref(label.href)
        for(let i=0;i<this.iconList.length;i++){
            if(this.iconList[i].href === label.href){
                this.iconList[i].activeFlag = false
            }else{
                this.iconList[i].activeFlag = true
            }
        }
    },//·控制图标列表的高亮
},
mounted(){
    this.init()
},
watch:{
    deleteIdList(){
        if(this.deleteIdList.length === 0){
            this.showDeleteFlag = false
        }//当删除标签的ID列表中为空，解除删除状态
    },
    type(){
        this.deleteIdListInit()
    },
    chosedLabel(){
        this.modifyInit()
    },
    modifyLabel:{
        deep:true,
        handler(){
            for(let i=0;i<this.iconList.length;i++){
                if(this.iconList[i].href === this.modifyLabel.href){
                    this.iconList[i].activeFlag = false
                }else{
                    this.iconList[i].activeFlag = true
                }
            }
        }
        
    }
}
}
</script>

<style lang="scss" scoped>
    .theLabel{
        position: relative;
        width: 100%;
        height: 100%;
    }
        .top{
            width: 100%;
            height: 15%;
        }
            .title{
                width: 100%;
                height: 50%;
            }

            .type{
                width: 100%;
                height: 50%;
            }

        .center{
            width: 100%;
            height: 85%;

            overflow: auto;
        }
        .center-modify{
            width: 100%;
            height: 35%;

            overflow: auto;
        }
        .center-delete{
            width: 100%;
            height: 65%;

            overflow: auto;
        }

        .deleteLabel{
            width: 100%;
            height: 15%;

            position: absolute;

            display: flex;
            
            z-index: 1;
            bottom: 0;
        }

        .modifyLabel{
            width: 100%;
            height: 50%;

            position: absolute;
            
            z-index: 1;
            bottom: 1%;

        }

.bottomBox-enter{
    transform: translateY(100%);
}
.bottomBox-enter-to{
    transform: translateY(0%);
}
.bottomBox-enter-active{
    transition: all 0.8s ease;
}

.bottomBox-leave{
    transform: translateY(0%);
}
.bottomBox-leave-to{
    transform: translateY(100%);
}
.bottomBox-leave-active{
    transition: all 0.8s ease;
}
</style>