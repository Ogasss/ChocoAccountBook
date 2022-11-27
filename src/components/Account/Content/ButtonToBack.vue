<template>
<div class="theButtonCreateAccountBook">
    <div class="theWrapper">
        <div class="icon-book">
            <Icon :href="`#Up`"/>
        </div>
        <div class="button-wrapper">
            <div class="box left"></div>
            <div class="content"><span>返回至账本总览~</span></div>
            <div class="box right"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'theButtonToBack'
}
</script>

<style lang="scss" scoped>
.theButtonCreateAccountBook{
    height: 100%;
    width: 100%;

    display: flex
}
    .theWrapper{
        position: relative;
        margin: auto;
        width: 80%;
        height: 60%;
        display: flex;
    }
        .button-wrapper{
            margin: auto;
            width: 100%;
            height: 70%;
            display: flex;
        }
            .button-wrapper .box{
                width: 10%;
                height: 100%;
                background: rgb(135, 120, 120);
            }
                .button-wrapper .left{
                    border-radius: 50% 0% 0% 50%;
                }
                .button-wrapper .right{
                    border-radius: 0% 50% 50% 0%;
                    transform: translate(-1px);
                }
            .button-wrapper .content{
                width: 80%;
                height: 100%;
                display: flex;
                background: rgb(135, 120, 120);
            }
            .button-wrapper .content span{
                margin: auto;
                color: white;
                transform: translate(5px);
            }

    .icon-book{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20%;
        height: 100%;
        transform: rotate(-90deg);
    }
</style>