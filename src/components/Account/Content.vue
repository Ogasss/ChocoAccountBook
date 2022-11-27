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
        <div class="button" v-show="!enterFlag">
            <ButtonCreateAccountBook/>
        </div>
        
        <div @click="enterFlag = false" class="button" v-show="enterFlag">
            <ButtonToBack/>
        </div>
    </div>
</div>
</template>

<script>
import Title from '@/components/Account/Content/Title.vue'
import BookList from '@/components/Account/Content/BookList.vue'
import ButtonCreateAccountBook from '@/components/Account/Content/ButtonCreateAccountBook.vue'
import ButtonToBack from '@/components/Account/Content/ButtonToBack.vue'
import BookAdmin from '@/components/Account/Content/BookAdmin.vue'

import recordListModel from '@/models/recordListModel'
import accountBookModel from '@/models/accountBookModel'

export default {
name:'Content',
data(){
    return{
        enterFlag: false,
        title: '账本总览',
        name:'',
        accountBookList:[],
        accountBook:{},
        accountBookOfRecordList:[],
        listOrder:{
            type:'全部',
            order:{
                anchor:'日期',
                order:'降序',
            },
        },
        
        modifyRecordFlag: false,
        chosedRecord:{},

        modifyNameFlag: false,
        newName:'',
    }
},
methods:{
    getAccountBook(value){
        this.name = value
        let name = this.name
        for(let i=0;i<this.accountBookList.length;i++){
            if(this.accountBookList[i].name === name){
                this.accountBook = this.accountBookList[i]
            }
        }

        this.enterFlag = true
        let theData = recordListModel.fetch()
        let data = recordListModel.filterAccountBook(theData,name)
        this.accountBookOfRecordList = data
        this.orderFilter()
    },//在账本总览点击账本，获取所有账单
    orderFilter(){
        let data = this.accountBookOfRecordList || []
        if(this.listOrder.type === '支出'){
            data = recordListModel.filterType(data,'支出')
        }
        if(this.listOrder.type === '收入'){
            data = recordListModel.filterType(data,'收入')
        }
        if(this.listOrder.order.anchor === '金额'){
            data = recordListModel.orderAccount(data,this.listOrder.order.order)
            
        }
        if(this.listOrder.order.anchor === '日期'){
            data = recordListModel.orderDate(data,this.listOrder.order.order)
        }
        this.accountBookOfRecordList = data
    },//账本账单根据list的头部导航，进行筛选
    setOrder(option,value){
        if(option === 'type'){
            this.listOrder.type = value
        }
        if(option === 'order'){
            this.listOrder.order.order = value
        }
        if(option === 'anchor'){
            this.listOrder.order.anchor = value
        }
    },//设置list头部导航条件
    getChosedRecord(record){
        if(this.chosedRecord === record){
            this.hideModifyRecord()
        }else{
            this.chosedRecord = record
            this.modifyNameFlag = false
            this.modifyRecordFlag = true
        }
        
    },//点击获取账单
    hideModifyRecord(){
        this.modifyRecordFlag = false
        this.chosedRecord = {
                type:'',
                label:'',
                date:'',
                account:'',
            }
    },//隐藏账单信息
    choseModifyName(){
        if(!this.modifyNameFlag){
            this.modifyNameFlag = true
            this.modifyRecordFlag = false
            this.chosedRecord = {}
        }else{
            this.modifyNameFlag = false
        }
        
    },//显示修改余额
    getNewName(string){
        console.log(string)
        this.newName = string
    },//用于筛选用户输入的字符串中的数字
    setNewName(){
        for(let i=0;i<this.accountBookList.length;i++){
            if(this.accountBookList[i].name === this.name){
                this.accountBookList[i].name = this.newName
            }   
        }
        accountBookModel.save(this.accountBookList)
        recordListModel.changeAccountBookName(this.name,this.newName)
        this.choseModifyName()
    }
},
mounted(){
    accountBookModel.allCompute()
    this.accountBookList = accountBookModel.fetch()
},
watch:{
    enterFlag(){
        if(this.enterFlag){
            this.title = '账本账单'
        }else{
            this.title = '账本总览'
        }
    },
    listOrder:{
        deep:true,
        handler:function(){
            this.getAccountBook(this.name)
        }
    }
},
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

    border-radius: 3%;
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