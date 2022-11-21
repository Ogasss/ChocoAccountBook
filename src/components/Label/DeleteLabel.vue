<template>
<div class="theDeleteLabel">
    <div class="title-wrapper">
        <div class="icon">
            <Icon :href="`#Adjustments`"/>
        </div>
        <div class="title">
            <div class="box-left"></div>
            <div class="content">
                <span>确定要删除这些标签？</span>
            </div>
            <div class="box-right"></div>
        </div>
    </div>
    <div class="confirm-wrapper">
        <div @click="deleteIdListInit()" class="cancel">
            <Confirm :text="`取消`" :colorType="1" :iconType="false"/>
        </div>
        <div @click="beTrueDelete()" class="beTrue">
            <Confirm :text="`确定`" :colorType="1" :iconType="true"/>
        </div>
    </div>

</div>
</template>

<script>
import Confirm from '@/components/Confirm.vue'
export default {
name:'DeleteLabel',
props:[
    'deleteIdListInit',
    'beTrueDelete'
],
components:{
    Confirm
}
}
</script>

<style lang="scss" scoped>
    .theDeleteLabel{
        margin: auto;
        width: 95%;
        height: 95%;

        background: rgb(215, 215, 190);

        border-radius: 5%;
    }
        .theDeleteLabel .title-wrapper{
            width: 100%;
            height: 55%;

            display: flex;

        }
            .theDeleteLabel .title-wrapper .icon{
                margin: auto;
                width: 18%;
                height: 55%;

            }
            .theDeleteLabel .title-wrapper .title{
                margin: auto;
                width: 77%;
                height: 55%;

                transform: translate(-4%);

                display: flex;
            }
                .theDeleteLabel .title-wrapper .title .box-left{
                    width: 15%;
                    height: 100%;

                    border-radius: 50% 0% 0% 50%;
                    background: rgb(240, 240, 225);
                    transform: translate(1px);
                }
                .theDeleteLabel .title-wrapper .title .content{
                    width: 70%;
                    height: 100%;
                    background: rgb(240, 240, 225);
                    display: flex;
                }
                    .theDeleteLabel .title-wrapper .title .content span{
                        margin: auto;
                        color: rgb(110, 95, 85);
                    }
                .theDeleteLabel .title-wrapper .title .box-right{
                    width: 15%;
                    height: 100%;

                    background: rgb(240, 240, 225);
                    border-radius: 0% 50% 50% 0%;
                    transform: translate(-1px);
                }
        .theDeleteLabel .confirm-wrapper{
            margin: auto;
            width: 93%;
            height: 40%;

            display: flex;
            justify-content: space-between;
        }
</style>