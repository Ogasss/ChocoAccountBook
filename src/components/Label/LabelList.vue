<template>
<div class="theLabels">
    <div class="label-wrapper">
        <div @click="showDeleteFlag||choseAddLabel({
            href: '#Add to',
            text: ''
        })" class="label">
            <LabelIcon :href="'#Add to'" :text="'添加'" :activeFlag="''"/>
        </div>
    </div>

    <div 

    v-for="label in labelsList[index]" 
    
    :key="label.text" 
    
    :class="label.deleteFlag ? `label-wrapper deleteChose`:
        `label-wrapper`">
        <div 
        
        @click="showDeleteFlag ? choseDeleteLabel(label) : choseModifyLabel(label)"
        @touchstart="!showDeleteFlag&&!showModifyFlag&&timeStart(label)"
        @touchend="!showDeleteFlag&&!showModifyFlag&&timeEnd()" 
        
        class="label"
        >
            <LabelIcon :href="label.href" :text="label.text" :activeFlag="label.activeFlag"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:"LabelList",
props:[
    'labelsList',
    'type',
    'choseModifyLabel',
    'choseDeleteLabel',
    'choseAddLabel',
    'showDeleteFlag',
    'showModifyFlag',
    'timeStart',
    'timeEnd',
],
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
}
</script>

<style lang="scss" scoped>
    .theLabels{
    width: 100%;

    flex-wrap: wrap;
    display: flex;

    overflow: auto;

    }
    .label-wrapper{
        width: 25%;
        height: 33.3%;
        margin-top: 2%;

        display: flex;
    }
    .label{
        margin: auto;

        width: 9vh;
        height: 9vh;
    }
    .deleteChose{
        transform: scale(0.9);
        transition: all 0.6s ease;
    }
</style>