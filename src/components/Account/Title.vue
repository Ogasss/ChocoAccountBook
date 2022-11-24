<template>
<div class="theTitle">
<div class="box-left"></div>
<div class="content">
    <span>
        账本管理
    </span>
</div>
<div class="box-right"></div>
</div>
</template>

<script>
export default {
name:'Title'
}
</script>

<style lang="scss" scoped>
.theTitle{
    width: 95%;
    height: 90%;

    margin: auto;
    display: flex;
}
    .theTitle .box-left{
        width: 10%;
        height: 100%;

        border-radius:  50% 0% 0% 50%;
        transform: translate(1px);
        background: rgb(240, 235, 225);
    }
    .theTitle .box-right{
        width: 10%;
        height: 100%;

        border-radius:  0% 50% 50% 0%;
        transform: translate(-1px);
        background: rgb(240, 235, 225);
    }
    .theTitle .content{
        width: 80%;
        height: 100%;
        display: flex;
        background: rgb(240, 235, 225);
    }
        .theTitle .content span{
            margin: auto;
            color: rgb(105, 85, 95);
        }
</style>