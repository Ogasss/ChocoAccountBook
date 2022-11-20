<template>
    <div class="theTitle">
        <div class="icon">
            <Icon :href="'#Adjustments'"/>            
        </div>
        <div class="title">
            <div class="box-left"></div>
            <div class="text">
                <span>修改标签</span>
            </div>
            <div class="box-right"></div>
        </div>
    </div>
</template>

<script>
export default {
name:'Title'
}
</script>

<style lang="scss" scoped>
    .theTitle{
            margin-left: auto;
            margin-right: auto;

            display: flex;

            width: 95%;
            height: 100%;
        }
            .icon{
                width: 10%;
                height: 60%;

                margin: auto;
                margin-left: 0;
            }
            .title{
                width: 85%;
                height: 70%;

                display: flex;

                margin: auto;
            }
                .title .box-left{
                    width: 15%;
                    height: 100%;

                    border-radius: 50% 0% 0% 50%;

                    transform: translate(1px);

                    background: rgb(240, 235, 225);
                }
                .title .box-right{
                    width: 15%;
                    height: 100%;

                    border-radius: 0% 50% 50% 0%;

                    transform: translate(-1px);

                    background: rgb(240, 235, 225);
                }
                .title .text{
                    width: 70%;
                    height: 100%;

                    display: flex;

                    background: rgb(240, 235, 225);
                }
                    .title .text span{
                        margin: auto;
                        transform: translate(-4px);
                        color: rgb(135, 120, 120);
                    }
</style>