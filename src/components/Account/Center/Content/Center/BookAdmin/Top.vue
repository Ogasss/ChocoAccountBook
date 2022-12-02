<template>
<div class="top">
    
    <div 
    @click="choseModifyName()" 
    :class="this.modifyNameFlag ? 'name active' : 'name'"
    >
        <span>{{this.accountBook.name}}</span>
    </div>

    <div class="account">
        <span class="text1">余额：</span>
        <span class="text2">{{this.accountBook.account}}</span>
    </div>

</div>
</template>

<script>
export default {
name:'Top',
props:[
    'accountBook',
    'choseModifyName',
    'modifyNameFlag'
],
}
</script>

<style lang="scss" scoped>
span{
    color: white;
}
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 8%;
}
    .name{
        width: 25%;
        height: 80%;
        display: flex;
        background: rgb(185, 170, 155);
    }
        .name span{
            margin: auto;
        }
    .account{
        width: 70%;
        height: 80%;
        display: flex;
        justify-content: space-between;
        background: rgb(185, 170, 155);
    }
        .account .text1{
            margin-top: auto;
            margin-bottom: auto;
            margin-left: 10%;
        }
        .account .text2{
            margin-top: auto;
            margin-bottom: auto;
            margin-right: 10%;
        }
    .active{
        background: rgb(135, 120, 120);
    }
</style>