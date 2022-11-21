<template>
<div class="theLabel">
    <div class="top">
        <div class="title">
            <LabelTitle />
        </div>
        <div class="type">
            <MoneyTop :type="this.type" :changeType="this.changeType" />
        </div>
    </div>
    
    <div 
    v-if="showLabelListFlag"
    :class="
        showModifyFlag ? 'center-modify' : 
        showDeleteFlag ? 'center-delete' : null
    "
    >
        <LabelList 
        :labelsList="this.labelsList"
        :type="this.type"
        :choseModifyLabel="this.choseModifyLabel"

        :choseDeleteLabel="this.choseDeleteLabel"
        :timeStart="this.timeStart"
        :timeEnd="this.timeEnd"

        :showDeleteFlag="this.showDeleteFlag"
        :showModifyFlag="this.showModifyFlag"
        />
    </div>

    <transition name="bottomBox">
        <div v-show="showDeleteFlag" class="deleteLabel">

        </div>    
    </transition>

    <transition name="bottomBox">
        <div v-show="showModifyFlag" class="modifyLabel">
            <ModifyLabel
            :modifyInData="this.modifyInData"
            :chosedLabel="this.chosedLabel"/>
        </div>
    </transition>

</div>
</template>

<script>
import MoneyTop from '@/components/Money/MoneyTop.vue'
import LabelTitle from '@/components/Label/LabelTitle.vue'
import LabelList from '@/components/Label/LabelList.vue'
import ModifyLabel from '@/components/Label/ModifyLabel.vue'

import labelsListModel from '@/models/labelsListModel'
import { watch } from 'vue'


export default {
name:'Label',
components:{
    MoneyTop,
    LabelTitle,
    LabelList,
    ModifyLabel
},
data(){
    return{
        type:'支出',
        labelsList:[],
        chosedLabel:{},
        showModifyFlag:false,
        showLabelListFlag:true,
        //修改标签的变量

        showDeleteFlag:false,
        deleteLabelList:[],
        deleteIdList:[]
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
    choseModifyLabel(value){
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
    },//选择标签
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
    modifyInData(object){
        let index
        if(this.type=== '支出'){
            index = 0
        }else if(this.type === '收入'){
            index = 1
        }
        this.labelsList[index][object.id] = object
        this.showLabelListFlag = false
        let _this = this
        setTimeout(function(){
            _this.showLabelListFlag = true
        }, 0);
        labelsListModel.save(this.labelsList)
    },//存储修改标签的信息至model的data
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
        console.log('执行')
        let index 
        this.index === 0 && (index = 1)
        this.index === 1 && (index = 0)
        for(let i=0;i<this.labelsList[index].length;i++){
            console.log('初始化')
            this.labelsList[index][i].activeFlag = false
            this.labelsList[index][i].deleteFlag = false
        }
    }
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
            height: 20%;

            position: absolute;
            
            z-index: 1;
            bottom: 0;

            border: 1px solid red;
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