const localStorageKeyName = 'IconList'

const IconListModel = {
    sourceArr:
    `Adjustments.svg
    Affirm.svg
    Bargraph.svg
    Calendar.svg
    Cup.svg
    Error.svg
    Heart.svg
    Home.svg
    Label-add.svg
    Label.svg
    Linegraph.svg
    Lollipop.svg
    Music.svg
    Notebook.svg
    Pencil.svg
    Pentagram.svg
    Settings.svg
    Smile.svg
    Toolbox.svg
    Tools.svg
    Trophy.svg`,

    hrefArr:[

    ],

    data:[],
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName))
    },
    save(data){
        localStorage.setItem(localStorageKeyName,JSON.stringify(data))
    },
    init(){
        this.hrefArr = this.sourceArr.split('.svg\n')
        this.hrefArr[this.hrefArr.length-1] = this.hrefArr[this.hrefArr.length-1].split('.svg')[0]

        for(let i=0;i<this.hrefArr.length;i++){
            this.data[i] = {href:'',activeFlag:true}
            this.data[i].href = '#' + this.hrefArr[i].trim()
        }
    }
}

export default IconListModel