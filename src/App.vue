<template>
<div class="box-wrapper-app">
    <Layout/>
</div>
</template>

<script>
import Layout from '@/components/Views/Layout.vue'
import recordListModel from '@/models/recordListModel'
import labelsListModel from '@/models/labelsListModel'

export default {
    components:{
        Layout,
    },
    methods:{
        init(){
            let flag = false
            if(!recordListModel.fetch()){
                recordListModel.init()
                flag = true
            }
            if(!labelsListModel.fetch()){
                labelsListModel.init()
                flag = true
            }
            if(flag){
                this.$router.go(0)
            }
            /*完成recordList的初始化*/
        
        }//初始化方法
        
    },
    mounted(){
        this.init()
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
}
*::before, *::after{
    box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6{
    font-weight: normal;
}
a{
    color: inherit;
    text-decoration: none;
}
ul,ol{
    list-style: none;
}
table{
    border-collapse: collapse;
    border-spacing: 0;
}
button{
    border: 0px;
    background: none;
}
input{
  border: 0;
  background: none;
  outline: 0;
}
body{
  background: rgb(215, 210, 205);
}
.box-wrapper-app{
    width: 100vw;
    height: 100vh;
    display: flex;
}
</style>