<template>
<div class="theModifyAccount">
    <div class="wrapper">
        <div class="top">
            <Title :titleText="`确定要删除选中的账本？`"/>
        </div>

        <div class="confirm">
            <div @click="cancelDelete()" class="theConfirm">
                <span>取消</span>
            </div>

            <div @click="deleteAccountBook()" class="theConfirm">
                <span>确定</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Title from '@/components/Label/ModifyOrAddLabel/Title.vue'
export default {
name:"DeleteAccountBook",
props:[
    'cancelDelete',
    'deleteAccountBook'
],
components:{
    Title
}
}
</script>

<style lang="scss" scoped>
.theModifyAccount{
    border-radius: 5%;

    background: rgb(215, 215, 190);

    height: 100%;
    display: flex;
}
    .wrapper{
        height: 95%;
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
        .wrapper .top{
            height: 50%;
        }
        .wrapper .confirm{
            margin: auto;
            width: 70%;
            height: 35%;
            display: flex;
            justify-content: space-between;
        }
        .confirm .theConfirm{
            border-radius: 10%;
            width: 40%;
            display: flex;
            background: rgb(240, 235, 225);
        }
            .theConfirm span{
                color: rgb(135, 120, 120);
                margin: auto;
            }
</style>