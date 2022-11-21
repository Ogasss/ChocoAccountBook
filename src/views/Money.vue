<template>
<div class="theMoney">
    <div class="top">
        <MoneyTop :type="this.type" :changeType="this.changeType"/>
    </div>

    <div class="center">
        <div class="amount-wrapper">
            <MoneyCenterAmount 
                :amount="this.amount"
                :labelList="this.labelList"
                />
        </div>
        <div class="labels-wrapper">
            <MoneyCenterLabels 
                :labelList="this.labelList"
                :choseLabel="this.choseLabel"
                />
        </div>
    </div>

    <div class="bottom">
        <MoneyBottom 
        :amount="this.amount" 
        :keysDown="this.keysDown"
        :getNote="this.getNote"
        :okay="this.okay"
        />
    </div>

</div>
</template>

<script>
import MoneyTop from '@/components/Money/MoneyTop.vue'
import MoneyCenterAmount from '@/components/Money/MoneyCenterAmount.vue'
import MoneyCenterLabels from '@/components/Money/MoneyCenterLabels.vue'
import MoneyBottom from '@/components/Money/MoneyBottom.vue'

import recordList from '@/models/recordListModel'
import labelList from '@/models/labelsListModel'

export default {
    name:'Money',
    data(){
        return{
            type:'支出',
            amount: '0',
            note:'',
            labelList,
        }
    },
    components: {
        MoneyTop,
        MoneyCenterAmount,
        MoneyCenterLabels,
        MoneyBottom
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

            let time = year+'/'+month+'/'+day+'/'+timing
            return time
        },//获取当前时间
        okay(){
            let data = {}

                //账单类型
                if(this.type === '支出'){
                    data.type = '-'
                }else if(this.type === '收入'){
                    data.type = '+'
                }

                //账单数目
                if(this.amount != '0'){
                    data.amount = this.amount
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
                data.time = this.getTime()

            if(recordList.fetch()){
                console.log('原有数据存在')
                let oldData = recordList.fetch()  
                oldData.push(data)
                recordList.save(oldData)  
            }else{
                console.log('原有数据不存在')
                recordList.save([])
                let oldData = recordList.fetch()
                
                oldData.push(data)
                recordList.save(oldData) 
            }

            
            this.init()
        },//bottom - 提交单笔账单
        init(){
            this.type = "支出"
            this.amount = "0"
            this.note = ''
            for(let i=0;i<this.labelList.length;i++){
                this.labelList[i].activeFlag = false
            }
            this.$router.go(0)
        },//提交单笔账单后初始化
        labelsInit(){
            if(this.type === '支出'){
                this.labelList = labelList.fetch()[0]
            }
            if(this.type === '收入'){
                this.labelList = labelList.fetch()[1]
            }
        },//重置列表
    },
    watch:{
        type(){
            this.labelsInit()
        }
    },
    mounted(){
        this.labelsInit()
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