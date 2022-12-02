<template>
<div class="box-wrapper-app">
    <Layout/>
    <img v-show="this.qrcodeFlag" src="./assets/qrcode.png" alt="">
</div>
</template>

<script>
import Layout from '@/components/Views/Layout.vue'
import recordListModel from '@/models/recordListModel'
import labelsListModel from '@/models/labelsListModel'

export default {
    data(){
        return{
            qrcodeFlag:false
        }
    },
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

            if(document.documentElement.clientWidth > 500){
                window.alert('请使用移动设备打开此应用')
                console.log(document.documentElement.clientWidth)
                this.qrcodeFlag = true
            }

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

    -webkit-touch-callout:none;  
    -webkit-user-select:none;  
    -khtml-user-select:none;  
    -moz-user-select:none;  
    -ms-user-select:none;  
    user-select:none; 
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
    position: relative;
}
.box-wrapper-app img{
    position: absolute;
    width: 400px;
    height: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}
</style>