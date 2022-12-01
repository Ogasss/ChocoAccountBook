<template>
<div class="theLabelTitle">
    <div class="title">
        <div class="boxLeft">

        </div>

        <div class="boxContent">
            <div class="text">
                <span>标 签 编 辑</span>
            </div>
        </div>
        
        <div class="boxRight">

        </div>
    </div>
</div>
</template>

<script>
export default {
name:'LabelTitle'
}
</script>

<style lang="scss" scoped>
    .theLabelTitle{
        width: 100%;
        height: 100%;

        display: flex;
    }
        .theLabelTitle .title{
            margin: auto;
            height: 60%;
            width: 95%;

            display: flex;
        }

            .theLabelTitle .title .boxLeft{
                width: 10%;
                height: 100%;
                border-radius: 50% 0% 0% 50%;

                transform: translate(1px);

                background: rgb(220, 215, 190);
            }

            .theLabelTitle .title .boxContent{
                height: 100%;
                width: 80%;

                display: flex;


                background: rgb(220, 215, 190);
            }
                .theLabelTitle .title .boxContent .text{
                    margin: auto;
                    font-size: 16px;
                    font-weight: bold;
                    color: rgb(135, 120, 120);
                }

            .theLabelTitle .title .boxRight{
                width: 10%;
                height: 100%;
                border-radius: 0% 50% 50% 0%;

                transform: translate(-1px);
                
                background: rgb(220, 215, 190);
            }
</style>