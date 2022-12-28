<template>
<div class="theBookList">
    <div 
    @click="!allowDeleteFlag&&getAccountBook(book.name)" 
    @touchstart="timeStart(book.name)"
    @touchend="timeEnd()"
    v-for="book in accountBookList" 
    :key="book.name" 
    class="item-wrapper">
        <div :class="(deleteBookName===book.name) ? 'name-wrapper name-wrapper-active' : 'name-wrapper'">
            <span class="text">
                {{book.name}}
            </span>
        </div>
        <div :class="(deleteBookName===book.name) ? 'account-wrapper account-wrapper-active' : 'account-wrapper'">
            <span class="text">
                {{book.account}}
            </span>
        </div>
    </div>

    <transition name="modify">
        <div v-show="createNewBookFlag" class="createNewAccountBook">
            <CreateNewAccountBook 
            :newBookName ="this.newBookName"
            :showOrHideCreateNewBook = "this.showOrHideCreateNewBook"
            :getNewBookName = "this.getNewBookName"
            :createNewBook = "this.createNewBook"
            />
        </div>
    </transition>
    
    <transition name="modify">
        <div v-show="allowDeleteFlag" class="deleteAccountBook">
            <DeleteAccountBook
            :cancelDelete="this.cancelDelete"
            :deleteAccountBook="this.deleteAccountBook"
            />
        </div>
    </transition>
        
</div>
</template>

<script>
import CreateNewAccountBook from '@/components/Account/Center/Content/Center/BookList/Bottom/CreateNewAccountBook.vue'
import DeleteAccountBook from '@/components/Account/Center/Content/Center/BookList/Bottom/DeleteAccountBook.vue'
export default {
name:'BookList',
props:[
    'accountBookList',
    'getAccountBook',
    'createNewBookFlag',
    'newBookName',
    'showOrHideCreateNewBook',
    'getNewBookName',
    'createNewBook',
    'timeStart',
    'timeEnd',
    'deleteBookName',
    'allowDeleteFlag',
    'cancelDelete',
    'deleteAccountBook',
],
components:{
    CreateNewAccountBook,
    DeleteAccountBook
}
}
</script>

<style lang="scss" scoped>
    .theBookList{
        position: relative;
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
                border-radius: 15px;
                background: rgb(185, 170, 155);
            }
            .theBookList .item-wrapper .account-wrapper{
                margin: auto;
                width: 25%;
                height: 100%;
                display: flex;
                border-radius: 15px;
                background: rgb(185, 170, 155);
            }
                .item-wrapper .text{
                    margin: auto;
                    color: white;
                }
        .theBookList .createNewAccountBook{
            position: absolute;
            height: 27.5%;
            bottom: 0;   
        }
        .theBookList .deleteAccountBook{
            position: absolute;
            width: 100%;
            height: 20%;
            bottom: 0;
        }
        .theBookList .item-wrapper .name-wrapper-active{
            margin: auto;
            width: 70%;
            height: 100%;
            display: flex;
            border-radius: 15px;
            background: rgb(135, 120, 120);
        }
        .theBookList .item-wrapper .account-wrapper-active{
            margin: auto;
            width: 25%;
            height: 100%;
            display: flex;
            border-radius: 15px;
            background: rgb(135, 120, 120);
        }

.modify-enter{
        opacity: 0;
        transform: translateY(50%);
}
.modify-enter-to{
    opacity: 1;
    transform: translateY(0%);
}
.modify-enter-active{
    transition: 0.3s all ease;
}
.modify-leave{
    opacity: 1;
    transform: translateY(0%);
}
.modify-leave-to{
    opacity: 0;
    transform: translateY(50%);
}
.modify-leave-active{
    transition: 0.3s all ease;
}
</style>