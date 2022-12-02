<template>
<div class="theAccount">
    <div class="title-wrapper">
        <Title/>
    </div>

    <div class="content-wrapper">
        <Content
            :enterFlag='this.enterFlag'
            :title='this.title'
            :name='this.name'
            :accountBookList='this.accountBookList'
            :accountBook='this.accountBook'
            :accountBookOfRecordList='this.accountBookOfRecordList'
            :listOrder='this.listOrder'
            :modifyRecordFlag='this.modifyRecordFlag'
            :chosedRecord='this.chosedRecord'
            :modifyNameFlag='this.modifyNameFlag'
            :newName='this.newName'
            :createNewBookFlag='this.createNewBookFlag'
            :newBookName='this.newBookName'
            :allowDeleteFlag='this.allowDeleteFlag'
            :deleteBookName='this.deleteBookName'
            :getAccountBook='this.getAccountBook'
            :orderFilter='this.orderFilter'
            :setOrder='this.setOrder'
            :getChosedRecord='this.getChosedRecord'
            :hideModifyRecord='this.hideModifyRecord'
            :choseModifyName='this.choseModifyName'
            :getNewName='this.getNewName'
            :setNewName='this.setNewName'
            :showOrHideCreateNewBook='this.showOrHideCreateNewBook'
            :getNewBookName='this.getNewBookName'
            :createNewBook='this.createNewBook'
            :timeStart='this.timeStart'
            :timeEnd='this.timeEnd'
            :cancelDelete='this.cancelDelete'
            :deleteAccountBook='this.deleteAccountBook'
        />
    </div>
    
</div> 
</template>

<script>
import Title from '@/components/Account/Top/Title.vue'
import Content from '@/components/Account/Center/Content.vue'

import recordListModel from '@/models/recordListModel'
import accountBookModel from '@/models/accountBookModel'

export default {
name:'Account',
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

        createNewBookFlag: false,
        newBookName:'',

        allowDeleteFlag: false,
        deleteBookName: '',
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
        this.createNewBookFlag = false
        this.newBookName = ''
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
    hideModifyRecord(bool){
        this.modifyRecordFlag = false
        this.modifyNameFlag = false
        this.enterFlag = bool
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
        
    },//显示修改账本名称
    getNewName(string){
        this.newName = string
    },//用于筛选用户输入的字符串中的数字
    setNewName(){
        let flag = true

        if(this.newName === ''){
            alert('新的名称为空！')
            flag = false
            this.newName = ''
        }else{
            for(let i=0;i<this.accountBookList.length;i++){
                if(this.newName === this.accountBookList[i].name){
                    alert('新账本名称已存在！')
                    flag = false
                    this.newName = ''
                }
            }
        }
        
        if(flag){
            for(let i=0;i<this.accountBookList.length;i++){
                if(this.accountBookList[i].name === this.name){
                    this.accountBookList[i].name = this.newName
                }   
            }
            accountBookModel.save(this.accountBookList)
            recordListModel.changeAccountBookName(this.name,this.newName)
            this.choseModifyName()
            this.newName = ''
        }
        
    },//更改账本名称
    showOrHideCreateNewBook(){
        if(this.createNewBookFlag){
            this.createNewBookFlag = false
            this.newBookName = ''
        }else{
            this.createNewBookFlag = true
        }
    },//隐藏或显示创建新账本窗口
    getNewBookName(string){
        this.newBookName = string
        console.log(this.newBookName)
    },//获取新的账本名
    createNewBook(){
        let flag = true
        if(this.newBookName === ''){
            alert('创建新账本名称不能为空！')
            flag = false
        }else{
            for(let i=0;i<this.accountBookList.length;i++){
                if(this.newBookName === this.accountBookList[i].name){
                    alert('创建的新账本已存在！')
                    flag = false
                }
            }
        }
        if(flag){
            let accountBook = {
                name: '',
                _account: 0,
                account: 0,
            }
            accountBook.name = this.newBookName
            this.accountBookList.push(accountBook)
            accountBookModel.save(this.accountBookList)
            this.showOrHideCreateNewBook()
        }
    },//创建新账本
    timeStart(name){
        this.timer = true
        setTimeout(() => {
            if(this.timer){
                this.deleteBookName = name
                this.allowDeleteFlag = true
            }
        }, 200)
    },
    timeEnd(){
        setTimeout(() => {
            this.timer = false
        }, 100);
    },//长按选择删除账本的辅助方法
    cancelDelete(){
        this.allowDeleteFlag = false,
        this.deleteBookName = ''
    },//取消删除账本
    deleteAccountBook(){
        for(let i=0;i<this.accountBookList.length;i++){
            if(this.accountBookList[i].name === this.deleteBookName){
                this.accountBookList.splice(i,1)
            }
        }
        recordListModel.deleteRecordOfBookName(this.deleteBookName);accountBookModel.save(this.accountBookList)
        this.cancelDelete()
    }
},
components:{
    Title,
    Content
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
    },
},
}
</script>

<style lang="scss" scoped>
    .theAccount{
        width: 100%;
        height: 100%;
    }
        .title-wrapper{
            margin-top: 2%;
            width: 100%;
            height: 6%;

            display: flex;
        }
        .content-wrapper{
            width: 100%;
            height: 92%;
            
            display: flex;
        }
</style>