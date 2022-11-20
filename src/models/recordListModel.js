const localStorageKeyName = 'recordList'

const recordModel = {
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName))
    },
    save(data){
        localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    }
}

export default recordModel