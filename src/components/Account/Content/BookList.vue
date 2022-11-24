<template>
<div class="theBookList">
    <div @click="getAccountBook(book.name)" v-for="book in accountBookList" :key="book.name" class="item-wrapper">
        <div class="name-wrapper">
            <span class="text">
                {{book.name}}
            </span>
        </div>
        <div class="account-wrapper">
            <span class="text">
                {{book.account}}
            </span>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'BookList',
props:[
    'accountBookList',
    'getAccountBook'
]
}
</script>

<style lang="scss" scoped>
    .theBookList{
        width: 95%;
        height: 100%;
        margin: auto;
        overflow: auto;
    }
        .theBookList .item-wrapper{
            height: 6%;
            display: flex;
            margin-bottom: 2%;
        }
            .theBookList .item-wrapper .name-wrapper{
                margin: auto;
                width: 70%;
                height: 100%;
                display: flex;
                border-radius: 5%;
                background: rgb(185, 170, 155);
            }
            .theBookList .item-wrapper .account-wrapper{
                margin: auto;
                width: 25%;
                height: 100%;
                display: flex;
                border-radius: 5%;
                background: rgb(185, 170, 155);
            }
                .item-wrapper .text{
                    margin: auto;
                    color: white;
                }
</style>