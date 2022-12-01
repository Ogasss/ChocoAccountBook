<template>
<div class="theLabels">
    <div 

    @click="choseIcon(label)"

    v-for="label in iconList" 
    
    :key="label.href" 
    
    class="label-wrapper">
        <div class="label">
            <LabelIcon :href="label.href" :activeFlag="label.activeFlag"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'IconList',
props:[
    'iconList',
    'choseIcon'
]
}
</script>

<style lang="scss" scoped>
    .theLabels{
    width: 100%;
    height: 100%;

    flex-wrap: wrap;
    display: flex;

    overflow: auto;

    }
    .label-wrapper{
        width: 25%;
        height: 33.3%;
        margin-top: 2%;
        margin-bottom: 8%;

        display: flex;
    }
    .label{
        margin: auto;

        width: 9vh;
        height: 9vh;

    }
</style>