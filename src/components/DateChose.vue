<template>
<div class="theDateChose">
    <div class="wrapper">
        <div class="box left"></div>
        <div class="content">
            <div class="chose">
                <span @click="setTime('year',false)">
                    ◀
                </span>
                <span>
                    {{this.year}}
                </span>
                <span @click="setTime('year',true)">
                    ▶
                </span>
            </div>

            <div class="chose">
                <span @click="setTime('month',false)">
                    ◀
                </span>
                <span>
                    {{this.month}}
                </span>
                <span @click="setTime('month',true)">
                    ▶
                </span>
            </div>

            <div class="chose">
                <span @click="setTime('day',false)">
                    ◀
                </span>
                <span>
                    {{this.day}}
                </span>
                <span @click="setTime('day',true)">
                    ▶
                </span>
            </div>
        </div>
        <div class="box right"></div>
    </div>
</div>
</template>

<script>
export default {
name:'DateChose',
props:[
    'setTime',
    'year',
    'month',
    'day'
]
}
</script>

<style lang="scss" scoped>
    .theDateChose{
        height: 100%;
        width: 100%;
        display: flex;
    }
        .theDateChose .wrapper{
            margin: auto;
            height: 100%;
            width: 100%;
            display: flex;
        }
            .wrapper .box{
                background: rgb(135, 120, 120);
                margin: auto;
                width: 5%;
                height: 100%;
            }
            .wrapper .left{
                border-radius: 50% 0% 0% 50%;
                transform: translate(1px);
            }
            .wrapper .right{
                border-radius: 0% 50% 50% 0%;
                transform: translate(-1px);
            }
            .wrapper .content{
                background: rgb(135, 120, 120);
                width: 90%;
                display: flex;
            }
                .content .chose{
                    margin: auto;
                    background: rgb(240, 235, 225);
                    border-radius: 8%;
                    width: 30%;
                    height: 70%;
                    display: flex;
                }
                .content .chose span{
                    margin: auto;
                    color: rgb(110, 95, 85);
                }
            
</style>