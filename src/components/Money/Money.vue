<template>
<div class="theMoney">
    <div class="top">
        <TopTypeChose 
            :type="this.type" 
            :changeType="this.changeType"
        />
        <!-- 支出与收入切换的顶部组件 -->
    </div>

    <div class="center">
        <div class="amount-wrapper">
            <CenterAmountBox 
                :amount="this.amount"
                :labelList="this.labelList"
            />
            <!-- 标签列表上的金额显示组件 -->
        </div>
        <div class="labels-wrapper">
            <CenterLabelList 
                :labelList="this.labelList"
                :choseLabel="this.choseLabel"
            />
            <!-- 中间标签列表组件 -->
        </div>
    </div>

    <div class="bottom">
        <BottomNumberKeyboard
            :theNote="this.note"
            :setAccountBook="this.setAccountBook"
            :keysDown="this.keysDown"
            :getNote="this.getNote"
            :okay="this.okay"

            :year='this.year'
            :month='this.month'
            :day='this.day'
            :setTime="this.setTime"
            :accountBookList="this.accountBookList"
            :accountBook="this.accountBook"
        />
        <!-- 底部数字键盘组件 -->
    </div>

</div>
</template>

<script>
import TopTypeChose from '@/components/Public/TopTypeChose.vue'
import CenterAmountBox from '@/components/Money/Center/CenterAmountBox.vue'
import CenterLabelList from '@/components/Money/Center/CenterLabelList.vue'
import BottomNumberKeyboard from '@/components/Money/Bottom/BottomNumberKeyboard.vue'

import recordListModel from '@/models/recordListModel'
import labelList from '@/models/labelsListModel'
import accountBookListModel from '@/models/accountBookModel.js'

export default {
    name:'Money',
    data(){
        return{
            type:'支出',//决定当前账单的支出与收入类型
            amount: '0',//当前账单的记账金额
            note:'',//当前账单的备注
            labelList,//在labelInit()函数中完成赋值，根据type决定其值
            accountBook:'巧克账本',//当前账单记入的账本

            year:0,//决定当前账单中日期的年份
            month:0,//月份
            day:0,//具体日期
            leapYear:null,//是否为闰年

            accountBookList:[]//账本列表，在mounted钩子中的调用get函数完成初始化赋值。
        }
    },
    components: {
        TopTypeChose,
        CenterAmountBox,
        CenterLabelList,
        BottomNumberKeyboard
    },
    methods:{
        keysDown(keyText){
            if('01234567890.'.indexOf(keyText) >=0){
                if(this.amount.length === 8 ){
                    return
                }
                if(this.amount.indexOf('.') && this.amount.slice(this.amount.indexOf('.')).length == 3){
                    return
                }
                if(this.amount === '0'){
                    if('01234567890'.indexOf(keyText) >= 0){
                        this.amount = keyText
                    }else{
                        this.amount += keyText
                    }
                    return
                }
                if(this.amount.indexOf('.') >= 0 && keyText === '.'){
                    return
                }
                
                this.amount += keyText
                return
            }

            if(keyText === '删除'){
                if(this.amount.length === 1){
                    this.amount = '0'
                    return
                }else if(this.amount.length === 3 && this.amount[1] === '.'){
                    this.amount = this.amount.slice(0,-2)
                    return
                }else{
                    this.amount = this.amount.slice(0,-1)
                    return
                }
            }

            if(keyText === '清空'){
                this.amount = '0'
                return
            }
        },//Bottom - 输入键盘
        changeType(){
            if(this.type === '支出'){
                this.type = '收入'
                return
                
            }
            if(this.type === '收入'){
                this.type = '支出'
                return
                
            }
        },//Top - 选择支出收入
        getNote(value){
            this.note = value
        },//Bottom - 获取备注
        choseLabel(value){
            for(let i = 0;i<this.labelList.length;i++){
                this.labelList[i].activeFlag = false
            }
            value.activeFlag = true
        },//CenterLabel - 选择记账标签
        getTime(){
            let date0 = new Date()
            let date = date0.toString()
            let arr = date.trim().split(' ')

            let year = arr[3]
            
            let month
            arr[1] === 'Jan' ? month = '01' :
            arr[1] === 'Feb' ? month = '02' :
            arr[1] === 'Mar' ? month = '03' :
            arr[1] === 'Apr' ? month = '04' :
            arr[1] === 'May' ? month = '05' :
            arr[1] === 'Jun' ? month = '06' :
            arr[1] === 'Jul' ? month = '07' :
            arr[1] === 'Aug' ? month = '08' :
            arr[1] === 'Sep' ? month = '09' :
            arr[1] === 'Oct' ? month = '10' :
            arr[1] === 'Nov' ? month = '11' :
            arr[1] === 'Dec' ? month = '12' : null

            let day = arr[2]

            let timing = arr[4]

            this.year = Number(year)
            this.month = Number(month)
            this.day = Number(day)

            let id = year+month+day+timing
            return id
        },//获取当前时间
        setTime(time,type){
            if(time==='year'){
                this.yearChange(type)
            }else if(time==='month'){
                this.monthChange(type)
            }else if(time==='day'){
                this.dayChange(type)
            }
        },
        yearChange(type){
            if(type){//增加
                this.year++
            }else{//减少
                this.year--
            }
            if(this.year%400 === 0){
                this.leapYear = true
            }else{
                this.leapYear = false
            }
        },
        monthChange(type){
            if(type && this.month<12){
                this.month++
            }
            if(!type&&this.month>1){
                this.month--
            }
        },
        dayChange(type){
            let max
            if([1,3,5,7,8,10,12].indexOf(this.month)!==-1){
                max = 31
            }else if([4,6,9,11].indexOf(this.month)!==-1){
                max = 30
            }else if(this.month === 2){
                this.leapYear?max=29:max=28
            }
            if(type){
                if(this.day<max){
                    this.day = this.day + 1
                }
            }else{
                if(this.day>1){
                    this.day = this.day - 1
                }
            }
        },
        okay(){
            let data = {}

                //账单类型
                if(this.type === '支出'){
                    data.type = '支出'
                }else if(this.type === '收入'){
                    data.type = '收入'
                }

                //账单数目
                if(this.amount != '0'){
                    let theAccount = this.amount
                    if(theAccount.split('.').length!==2){
                        theAccount = theAccount + '.00'
                    }else{
                        const decimal = theAccount.split('.')[1]
                        if(decimal.length === 1){
                            theAccount = theAccount + '0'
                        }
                    }
                    data.account = theAccount
                }else{
                    alert('当前账单为0~')
                    return
                }

                //账单备注
                data.note = this.note

                //账单标签
                for(let i=0;i<this.labelList.length;i++){
                    if(this.labelList[i].activeFlag){
                        data.label = this.labelList[i].text
                    }
                }
                if(data.label === undefined){
                    alert('请选择标签~')
                    return
                }

                //记账时间
                let str
                if(this.day<10){
                    str = this.year+'/'+this.month+'/'+'0'+this.day
                }else{
                    str = this.year+'/'+this.month+'/'+this.day
                }
                data.date = str

                //时间戳id
                data.id = this.getTime()

                data.accountBook = this.accountBook

            if(recordListModel.fetch()){
                let oldData = recordListModel.fetch()  
                oldData.push(data)
                recordListModel.save(oldData)  
            }else{
                recordListModel.save([])
                let oldData = recordListModel.fetch()
                
                oldData.push(data)
                recordListModel.save(oldData) 
            }

            
            this.init()
            alert('记完一笔咯~')
        },//bottom - 提交单笔账单
        init(){
            this.type = "支出"
            this.amount = "0"
            this.note = ''
            for(let i=0;i<this.labelList.length;i++){
                this.labelList[i].activeFlag = false
            }
        },//提交单笔账单后初始化
        labelsInit(){
            if(this.type === '支出'){
                this.labelList = labelList.fetch()[0]
            }
            if(this.type === '收入'){
                this.labelList = labelList.fetch()[1]
            }
        },//重置列表
        setAccountBook(value){
            this.accountBook = value
        },//选择账本
        getAccountBook(){
            if(accountBookListModel.fetch()){
                this.accountBookList = accountBookListModel.fetch()
            }else{
                accountBookListModel.save(accountBookListModel.data)
                this.accountBookList = accountBookListModel.fetch()
            }
        },//获取所有账本列表
    },
    watch:{
        type(){
            this.labelsInit()
        },
    },
    mounted(){
        this.labelsInit()
        this.getTime()
        this.getAccountBook()
    }
}
</script>

<style lang="scss" scoped>
    .theMoney{
        width: 100%;
        height: 100%;

        // border: 1px solid red;
    }
    .theMoney .top{
        width: 100%;
        height: 8%;
    }

        .theMoney .center{
            width: 100%;
            height: 50%;
        }
            .theMoney .center .amount-wrapper{
                width: 100%;
                height: 20%;

                display: flex;
            }

            .theMoney .center .labels-wrapper{
                width: 100%;
                height: 80%;

            }
        .theMoney .bottom{
            width: 100%;
            height: 42%;

        }
</style>