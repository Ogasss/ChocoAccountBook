<template>
<div class="theTitle">
    <div class="icon-wrapper">
        <Icon :href="`#Notebook`"/>
    </div>
    <div class="title-wrapper">
        <div class="box-left"></div>
        <div class="content">
            <span>{{this.title}}</span>
        </div>
        <div class="box-right"></div>
    </div>
</div>
</template>

<script>
export default {
name:'Title',
props:[
    'title',
]
}
</script>

<style lang="scss" scoped>
    .theTitle{
        margin: auto;
        display: flex;
        height: 100%;
        width: 95%;
    }
        .theTitle .icon-wrapper{
            height: 80%;
            width: 10%;
            margin: auto;
        }
        .theTitle .title-wrapper{
            height: 80%;
            width: 90%;
            margin: auto;
            display: flex;
        }
            .theTitle .title-wrapper .box-left{
                width: 10%;
                height: 80%;
                transform: translate(1px);
                border-radius: 50% 0% 0% 50%;
                background: rgb(135, 120, 120);
                margin: auto;
            }
            .theTitle .title-wrapper .content{
                width: 80%;
                height: 80%;
                display: flex;
                background: rgb(135, 120, 120);
                margin: auto;
            }
            .theTitle .title-wrapper .content span{
                margin: auto;
                color: white;
            }
            .theTitle .title-wrapper .box-right{
                width: 10%;
                height: 80%;
                transform: translate(-1px);
                border-radius: 0% 50% 50% 0%;
                background: rgb(135, 120, 120);
                margin: auto;
            }
</style>