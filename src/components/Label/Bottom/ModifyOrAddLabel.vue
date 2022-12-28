<template>
<div class="theModifyLabel">
    <div class="title-wrapper">
        <Title :titleText="this.titleText"/>
    </div>

    <div class="iconList">
        <ChangeIcon 
        :titleIcon="this.titleIcon"
        :modifyLabel="this.modifyLabel"
        :iconList="this.iconList" 
        :choseIcon="this.choseIcon"
        :setHref="this.setHref"/>
    </div>

    <div class="confirm">
        <ChangeName 
        :deleteIdListInit="this.deleteIdListInit"
        :modify="this.modify"
        :modifyLabel="this.modifyLabel"
        :setText="this.setText"
        />
    </div>
</div>
</template>

<script>
import Title from '@/components/Label/Bottom/ModifyOrAddLabel/Title.vue'
import ChangeIcon from '@/components/Label/Bottom/ModifyOrAddLabel/ChangeIcon.vue'
import ChangeName from '@/components/Label/Bottom/ModifyOrAddLabel/ChangeName.vue'

export default {
props:[
    'modifyOrAddInData',
    'chosedLabel',
    'titleIcon',
    'titleText',
    'deleteIdListInit',
    'modifyLabel',
    
    'setHref',
    'setText',
    'modify',
    'modifyInit',
    'iconListInit',
    'choseIcon',
    'iconList'
],
name: 'ModifyOrAddLabel',
methods:{
    
},
mounted(){
    this.modifyInit()
    this.iconListInit()
},
watch:{
},
components:{
    Title,
    ChangeIcon,
    ChangeName,
},
}
</script>

<style lang="scss" scoped>
    .theModifyLabel{
        margin: auto;
        width: 95%;
        height: 100%;

        display: flex;
        flex-direction: column;

        background: rgb(215, 215, 190);

        border-radius: 15px;
    }
        .theModifyLabel .title-wrapper{
            margin: auto;
            width: 100%;
            height: 15%;
            transform: translate(3px);
        }
        .iconList{
            margin-left: auto;
            margin-right: auto;

            width: 100%;
            height: 60%;

            display: flex;
        }
            
        .theModifyLabel .confirm{
            margin-left: auto;
            margin-right: auto;

            width: 100%;
            height: 25%;

            display: flex;
        }
</style>