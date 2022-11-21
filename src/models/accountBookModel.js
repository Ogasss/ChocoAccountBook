const localStorageKeyName = 'accountBookList'

const recordModel = {
    data:[
        {
            name:'巧克账本',
            account:'',
        },
    ],
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName))
    },
    save(data){
        localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    }
}

export default recordModel