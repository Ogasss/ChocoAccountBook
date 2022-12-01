const localStorageKeyName = 'recordList'

const recordModel = {
    init(){
        this.save([])
    },
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName))
    },
    save(data){
        localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    },
    filterType(data,value){
        let arr = []
        for(let i=0;i<data.length;i++){
            if(data[i].type === value){
                arr.push(data[i])
            }
        }
        // arr = data.filter(item => item.type === value)
        return arr
    },
    filterLabel(data,value){
        let arr = []
        for(let i=0;i<data.length;i++){
            if(data[i].label === value){
                arr.push(data[i])
            }
        }
        return arr
    },
    filterAccountBook(data,value){
        let arr = []
        for(let i=0;i<data.length;i++){
            if(data[i].accountBook === value){
                arr.unshift(data[i])
            }
        }
        return arr
    },
    orderAccount(data,order){
        if(order === '升序'){
            for(let i=0;i<data.length;i++){
                return this.minOrder(data)
            }
        }else if(order === '降序'){
            for(let i=0;i<data.length;i++){
                return this.minOrder(data).reverse()
            }
        }
    },
    getMin(data){
        let minIndex = 0
        let min = Number(data[minIndex].account)
        for(let i=0;i<data.length;i++){
            if(Number(data[i].account)<min){
                minIndex = i
                min = Number(data[minIndex].account)
            }
        }
        return [data[minIndex],minIndex]
    },
    minOrder(data){
        let arr = data
        let minIndex
        let min
        let x
        for(let i=0;i<arr.length;i++){
            let theData = arr.slice(i)
            min = this.getMin(theData)[0]
            minIndex = this.getMin(theData)[1]
            x = arr[i]
            arr[i] = min
            arr[minIndex+i] = x
        }
        return arr
    },
    getDateValue(string){
        let arr = string.split('/')
        let value = 0
        let year = Number(arr[0])
        let mouth = Number(arr[1])
        let Day = Number(arr[2])
        let Day31 = [1,3,5,7,7,8,10,12]
    
        if((year-1)%4 === 0){
            value = value + (year-1)*366
        }else{
            value = value + (year-1)*355
        }
    
        for(let i=1;i<mouth;i++){
            if(Day31.indexOf(i)){
                value += 31
            }else{
                value += 30
            }
        }
    
        value += Day
        return value
    },
    getDateMin(data){
        let minIndex = 0
            let min = this.getDateValue(data[minIndex].date)
            for(let i=0;i<data.length;i++){
                if(this.getDateValue(data[i].date)<min){
                    minIndex = i
                    min = this.getDateValue(data[minIndex].date)
                }
            }
            return [data[minIndex],minIndex]
    },
    minDateOrder(data){
        let arr = data
        let minIndex
        let min
        let x
        for(let i=0;i<arr.length;i++){
            let theData = arr.slice(i)
            min = this.getDateMin(theData)[0]
            minIndex = this.getDateMin(theData)[1]
            x = arr[i]
            arr[i] = min
            arr[minIndex+i] = x
        }
        return arr
    },
    orderDate(data,order){
        if(order === '升序'){
            for(let i=0;i<data.length;i++){
                return this.minDateOrder(data)
            }
        }else if(order === '降序'){
            for(let i=0;i<data.length;i++){
                return this.minDateOrder(data).reverse()
            }
        }
    },
    deleteRecord(id){
        let data =  this.fetch()
        for(let i=0;i<data.length;i++){
            if(data[i].id === id){
                data.splice(i,1)
            }
        }
        this.save(data)
        return data
    },
    changeAccountBookName(oldName,newName){
        let recordList = this.fetch()
        for(let i=0;i<recordList.length;i++){
            if(recordList[i].accountBook === oldName){
                recordList[i].accountBook = newName
            }
        }
        this.save(recordList)
    },
    deleteRecordOfBookName(name){
        let data = this.fetch()
        for(let i=0;i<data.length;i++){
            if(data[i].accountBook===name){
                console.log(data[i])
                data.splice(i,1)
                i--
            }
        }
        this.save(data)
    }

}

export default recordModel