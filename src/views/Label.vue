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
        :choseLabel="this.choseLabel"
        />
    </div>

    <transition name="bottomBox">
        <div v-show="showDeleteFlag" class="deleteLabel">

        </div>    
    </transition>

    <transition name="bottomBox">
        <div v-show="showModifyFlag" class="modifyLabel">
            <ModifyLabel
            :chosedLabel="this.chosedLabel"
            :modifyInData="this.modifyInData"
            :modifyLabel="this.modifyLabel"/>
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
        
        modifyLabel:{},
        chosedLabel:{},
        showDeleteFlag:false,
        showModifyFlag:false,
        showLabelListFlag:true,
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
    }
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
    },//CenterLabel - 选择记账标签
    showModify(value){
        this.showModifyFlag = true
        this.modifyLabel = value
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
        console.log(object)
        console.log(this.labelsList)
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
},
mounted(){
    this.init()
},
watch:{
    chosedLbael(){
        console.log(this.chosedLbael)
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