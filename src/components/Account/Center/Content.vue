<template>
<div class="theContent">
    <div class="title-wrapper">
        <Title :title="this.title"/>
    </div>
    <div class="content-wrapper">
        <div v-show="!enterFlag" class="List-wrapper">
            <BookList 
            :accountBookList="this.accountBookList"
            :getAccountBook="this.getAccountBook"

            :createNewBookFlag='this.createNewBookFlag'
            :showOrHideCreateNewBook="this.showOrHideCreateNewBook"
            :newBookName="this.newBookName"
            :getNewBookName="this.getNewBookName"
            :createNewBook="this.createNewBook"

            :allowDeleteFlag="this.allowDeleteFlag"
            :timeStart="this.timeStart"
            :timeEnd="this.timeEnd"
            :deleteBookName="this.deleteBookName"
            :cancelDelete="this.cancelDelete"
            :deleteAccountBook="this.deleteAccountBook"
            />
        </div>
        <div v-show="enterFlag" class="List-wrapper">
            <BookAdmin 
            :accountBook="this.accountBook"
            :accountBookOfRecordList="this.accountBookOfRecordList"
            :listOrder="this.listOrder"
            :setOrder="this.setOrder"

            :getChosedRecord="this.getChosedRecord"
            :hideModifyRecord="this.hideModifyRecord"
            :modifyRecordFlag="this.modifyRecordFlag"
            :chosedRecord="this.chosedRecord"

            :modifyNameFlag="this.modifyNameFlag"
            :choseModifyName="this.choseModifyName"
            :getNewName="this.getNewName"
            :setNewName="this.setNewName"
            />
        </div>
    </div>
    <div class="button-wrapper">
        <div @click="!allowDeleteFlag&&showOrHideCreateNewBook()" class="button" v-show="!enterFlag">
            <ButtonCreateAccountBook/>
        </div>
        
        <div @click="hideModifyRecord(false)" class="button" v-show="enterFlag">
            <ButtonToBack/>
        </div>
    </div>
</div>
</template>

<script>
import Title from '@/components/Account/Center/Content/Top/Title.vue'
import BookList from '@/components/Account/Center/Content/Center/BookList/BookList.vue'
import ButtonCreateAccountBook from '@/components/Account/Center/Content/Center/BookList/Bottom/ButtonCreateAccountBook.vue'
import ButtonToBack from '@/components/Account/Center/Content/Center/BookAdmin/Bottom/ButtonToBack.vue'
import BookAdmin from '@/components/Account/Center/Content/Center/BookAdmin/BookAdmin.vue'

export default {
name:'Content',
props:[
    'enterFlag',
    'title',
    'name',
    'accountBookList',
    'accountBook',
    'accountBookOfRecordList',
    'listOrder',
    'modifyRecordFlag',
    'chosedRecord',
    'modifyNameFlag',
    'newName',
    'createNewBookFlag',
    'newBookName',
    'allowDeleteFlag',
    'deleteBookName',
    'getAccountBook',
    'orderFilter',
    'setOrder',
    'getChosedRecord',
    'hideModifyRecord',
    'choseModifyName',
    'getNewName',
    'setNewName',
    'showOrHideCreateNewBook',
    'getNewBookName',
    'createNewBook',
    'timeStart',
    'timeEnd',
    'cancelDelete',
    'deleteAccountBook'
],
components:{
    Title,
    BookList,
    ButtonCreateAccountBook,
    ButtonToBack,
    BookAdmin,
}
}
</script>

<style lang='scss' scoped>
.theContent{
    width: 95%;
    height: 98%;

    margin: auto;

    border-radius: 15px;;
    background: rgb(240, 235, 225);
}
    .theContent .title-wrapper{
        width:100%;
        height: 8%;
    }
    .theContent .content-wrapper{
        width: 100%;
        height: 80%;
        display: flex;
    }
        .theContent .content-wrapper .List-wrapper{
            width: 100%;
            height: 100%;
        }
    .theContent .button-wrapper{
        width: 100%;
        height: 12%;
    }
        .theContent .button-wrapper .button{
            height: 100%;
            width: 100%;
        }
</style>