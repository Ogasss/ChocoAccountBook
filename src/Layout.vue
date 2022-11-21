<template>
<div @touchstart="touchstart" @touchend="touchend" class="theLayout">
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
            navFlag: false,
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
        }
    },
    components:{
        Navigation
    },
    methods:{
        touchstart(e){
            this.startX = e.changedTouches[0].clientX
        },
        touchend(e){
            this.endX = e.changedTouches[0].clientX
            if(this.startX - this.endX >= 100){
                this.navFlag = true
            }
            if(this.startX - this.endX <= -100){
                this.navFlag = false
            }
        }
    },
    mounted(){
        alert("向左滑动展开导航栏")
    }
}
</script>

<style lang="scss" scoped>
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
    left: 0%;
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