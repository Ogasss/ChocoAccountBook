<template>
<div class="theLabels">
    <div class="label-wrapper">
        <div class="label">
            <LabelIcon :href="'#Add to'" :text="'添加'" :activeFlag="''"/>
        </div>
    </div>

    <div 
    
    @click="choseLabel(label)"

    v-for="label in labelsList[index]" 
    
    :key="label.text" 
    
    class="label-wrapper">
        <div class="label">
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
    'choseLabel'
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
}
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
</style>