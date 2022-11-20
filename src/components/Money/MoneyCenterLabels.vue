<template>
<div class="theLabels">
    <div @click="choseLabel(label)" v-for="label in labelList" :key="label.text" class="label-wrapper">
        <div class="label">
            <LabelIcon :href="label.href" :text="label.text" :activeFlag="label.activeFlag"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'MoneyCenterLabels',
props:[
    'labelList',
    'choseLabel'
]
}
</script>

<style lang="scss" scoped>
.theLabels{
    width: 96%;
    height: 100%;

    flex-wrap: wrap;
    display: flex;

    overflow: auto;

}
.label-wrapper{
    width: 25%;
    height: 33.3%;

    display: flex;
}
.label{
    margin: auto;

    width: 9vh;
    height: 9vh;
}
</style>