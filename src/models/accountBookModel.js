import recordListModel from './recordListModel'
const localStorageKeyName = 'accountBookList'

const recordModel = {
    data:[
        {
            name:"巧克账本",
            account: 0,
        },
        {
            name:"支付宝",
            account: 0,
        },
        {
            name:"微信",
            account: 0,
        },
        {
            name:"现金",
            account: 0,
        },
    ],
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName))
    },
    save(data){
        localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    },
    compute(name){
        const data = recordListModel.filterAccountBook(recordListModel.fetch(),name)
        let account = 0
        for(let i=0;i<data.length;i++){
            if(data[i].type === '支出'){
                account = account - Number(data[i].account)
            }
            if(data[i].type === '收入'){
                account = account + Number(data[i].account)
            }
        }
        let theAccount = account + ''
        if(theAccount.split('.').length!==2){
            theAccount = theAccount + '.00'
        }else{
            const decimal = theAccount.split('.')[1]
            if(decimal.length === 1){
                theAccount = theAccount + '0'
            }
        }
        return theAccount
    },
    allCompute(){
        const data = this.fetch()
        for(let i=0;i<data.length;i++){
            data[i].account = this.compute(data[i].name)
        }
        this.save(data)
    }
}

export default recordModel