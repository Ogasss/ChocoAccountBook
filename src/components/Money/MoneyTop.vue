<template>
    <div class="theTop">
        <div @click="changeType()" class="nav-wrapper">
            <div :class="type==='支出' ? 'box-left-active' : 'box-left'"></div>
            
            <div :class="type==='支出' ? 'text-wrapper-active' : 'text-wrapper'">
                    <span :class="type==='支出' ? 'text-active' : 'text'">支出</span>
            </div>
            
            <div :class="type==='支出' ? 'box-right-active' : 'box-right'"></div>
        </div>

        
        <div @click="changeType()" class="nav-wrapper">
            <div :class="type==='收入' ? 'box-left-active' : 'box-left'"></div>
            
            <div :class="type==='收入' ? 'text-wrapper-active' : 'text-wrapper'">
                    <span :class="type==='收入' ? 'text-active' : 'text'">收入</span>
            </div>
            
            <div :class="type==='收入' ? 'box-right-active' : 'box-right'"></div>
        </div>
    </div>
</template>

<script>
export default {
name:'MoneyTop',
props:[
    'type',
    'changeType',
],
}
</script>

<style lang="scss" scoped>
        .theTop{
            width: 100%;
            height: 100%;

            display: flex;

            justify-content: space-around;
        }
            .nav-wrapper{
                margin-top: auto;
                margin-bottom: auto;
                width: 45%;
                height: 60%;

                display: flex;
            }
            .box-left{
                height: 100%;
                width: 20%;
                border-radius: 50% 0% 0% 50%;

                transform: translate(1px);

                background: rgb(135, 120, 120);
            }
            .box-left-active{
                height: 100%;
                width: 20%;
                border-radius: 50% 0% 0% 50%;

                transform: translate(1px);

                background: rgb(215, 215, 190);
            }
            .text-wrapper{
                height: 100%;
                width: 60%;
                display: flex;
                justify-content: space-around;

                background: rgb(135, 120, 120);
            }
            .text-wrapper-active{
                height: 100%;
                width: 60%;
                display: flex;
                justify-content: space-around;

                background: rgb(215, 215, 190);
            }
            .text{
                margin-top: auto;
                margin-bottom: auto;

                font-size: 18px;

                color: white;
                background: rgb(135, 120, 120);
            }
            .text-active{
                margin-top: auto;
                margin-bottom: auto;

                font-size: 18px;

                color: rgb(135, 120, 120);
            }
            .box-right{
                height: 100%;
                width: 20%;
                border-radius: 0% 50% 50% 0%;

                transform: translate(-1px);

                background: rgb(135, 120, 120);
            }
            .box-right-active{
                height: 100%;
                width: 20%;
                border-radius: 0% 50% 50% 0%;

                transform: translate(-1px);

                background: rgb(215, 215, 190);
            }
</style>