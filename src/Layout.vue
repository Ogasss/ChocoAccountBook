<template>
<div class="theLayout">
    <button class="text" @click="navFlag = !navFlag">PC测试导航按钮</button>

    <div :class="!navFlag ? 'content-wrapper' : 'content-wrapper active'">
        <router-view></router-view>
    </div>

    <transition name="nav">
        <div v-show="navFlag" class="nav-wrapper">
            <div class="nav">
                <Navigation/>            
            </div>
        </div>
    </transition>

</div>
</template>

<script>

import Navigation from '@/views/Navigation'
export default {
name:'Layout',
    data(){
        return{
            navFlag: false
        }
    },
    components:{
        Navigation
    }
}
</script>

<style lang="scss" scoped>
.text{
    right: 50%;
    position: fixed;
    border: 1px solid red;
}
.theLayout{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;

    overflow: hidden;

    background: rgb(215, 210, 205);
}
.theLayout .content-wrapper{
    margin-top: 5vh;
    margin-left: 1vw;
    margin-right: 1vw;
    width: 98%;
    height: 93vh;
    border-radius: 3%;

    transform: translate(0%);

    background: rgb(110, 95, 85);
}
.theLayout .content-wrapper button{
    position: absolute;
    right: 0;
}
.theLayout .active{
    transform: translate(-25%);
}
.theLayout .nav-wrapper{
    position: fixed;
    right: 2vw;
}


.nav-leave{
    transform: translate(0vw);
}
.nav-leave-to{
    transform: translate(40vw);
}
.nav-leave-active{
    transition: all 0.8s ease;
}
.nav-enter{
    transform: translate(40vw);
}
.nav-enter-to{
    transform: translate(0vw);
}
.nav-enter-active{
    transition: all 0.8s ease;
}
</style>