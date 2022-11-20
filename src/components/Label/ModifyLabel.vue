<template>
<div class="theModifyLabel">
    <div class="title-wrapper">
        <Title/>
    </div>

    <div class="iconList">
        <ChangeIcon 
        :href="this.href"
        :IconList="this.IconList" 
        :choseIcon="this.choseIcon"
        :setHref="this.setHref"/>
    </div>

    <div class="confirm">
        <ChangeName 
        :modify="this.modify"
        :href="this.href"
        :text="this.text"
        :setText="this.setText"/>
    </div>
</div>
</template>

<script>
import Title from '@/components/Label/ModifyLabel/Title'
import ChangeIcon from '@/components/Label/ModifyLabel/ChangeIcon.vue'
import ChangeName from '@/components/Label/ModifyLabel/ChangeName.vue'
import IconListModel from '@/models/IconListModel'
export default {
data(){
    return{
        href:'',
        text:'',
        IconList:[],
    }
},
name: 'ModifyLabel',
methods:{
    setHref(value){
        this.href = value
    },
    setText(value){
        this.text = value
    },
    modify(){
        if(this.chosedLabel.href !== this.href){
            this.chosedLabel.href = this.href
        }
        if(this.chosedLabel.text !== this.text && this.text.trim() !== ''){
            this.chosedLabel.text = this.text
        }
        this.modifyInData(this.chosedLabel)
    },
    init(){
        this.href = this.chosedLabel.href
        this.text = this.chosedLabel.text
    },
    IconListInit(){
        IconListModel.init()
        this.IconList = IconListModel.data
    },
    choseIcon(label){
        this.setHref(label.href)
        for(let i=0;i<this.IconList.length;i++){
            if(this.IconList[i].href === label.href){
                this.IconList[i].activeFlag = false
            }else{
                this.IconList[i].activeFlag = true
            }
        }
    },
},
mounted(){
    this.init()
    this.IconListInit()
},
watch:{
    chosedLabel(){
        this.init()
    },
    href(){
        for(let i=0;i<this.IconList.length;i++){
            if(this.IconList[i].href === this.href){
                this.IconList[i].activeFlag = false
            }else{
                this.IconList[i].activeFlag = true
            }
        }
    }
},
components:{
    Title,
    ChangeIcon,
    ChangeName,
},
props:[
    'hrefChose',
    'textChose',
    'modifyLabel',
    'modifyInData',
    'chosedLabel'
],
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

        border-radius: 5%;
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