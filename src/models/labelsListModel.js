const localStorageKeyName = 'labelsList'

const labelModel = {
    data:[
        [
            {
                id:0,
                href:'#Pencil',
                text:'日常',
                activeFlag: false,
            },
            {
                id:1,
                href:'#Heart',
                text:'医疗',
                activeFlag: false,
            },
            {
                id:2,
                href:'#Cup',
                text:'餐饮',
                activeFlag: false,
            },
            {
                id:3,
                href:'#Music',
                text:'娱乐',
                activeFlag: false,
            },
            {
                id:4,
                href:'#Heart',
                text:'恋爱',
                activeFlag: false,
            },
            {
                id:5,
                href:'#Home',
                text:'住宿',
                activeFlag: false,    
            },
            {
                id:6,
                href:'#Linegraph',
                text:'通勤',
                activeFlag: false
            },
            {
                id:7,
                href:'#Toolbox',
                text:'办公',
                activeFlag: false,
            },
            {
                id:8,
                href:'#Pentagram',
                text:'购物',
                activeFlag: false,
            },
            {
                id:9,
                href:'#Tools',
                text:'维修',
                activeFlag: false,
            },
        ],
        [
            {
                id:0,
                href:'#Toolbox',
                text:'工资',
                activeFlag: false,
            },
            {
                id:1,
                href:'#Trophy',
                text:'奖金',
                activeFlag: false
            },
            {
                id:2,
                href:'#Label-add',
                text:'补贴',
                activeFlag: false
            },
            {
                id:3,
                href:'#Smile',
                text:'要债',
                activeFlag: false
            }
        ],
    ],
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName))
    },
    save(data){
        localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    },
    init(){
        this.save(this.data)
    }
}

export default labelModel