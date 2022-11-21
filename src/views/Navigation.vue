<template>
<div class="theNavigation">
    <div class="box-top">
        <div class="box-top-1"></div>
        <div class="box-top-2"></div>
    </div>
    <div class="top-wrapper">
        <router-link 
            v-for="icon in topIcon" :key="icon.href" 
            :to="icon.to"
            class="icon-wrapper"
            >
            <div class="icon">
                <LabelIcon 
                :href="icon.href" 
                :activeFlag="icon.activeFlag"
                />
            </div>
        </router-link>
    </div>

    <div class="bottom-wrapper">
        <router-link 
            v-for="icon in bottomIcon" :key="icon.href" 
            :to="icon.to"
            class="icon-wrapper-bottom"
            >
            <div class="icon">
                <LabelIcon :href="icon.href" :activeFlag="icon.activeFlag"/>
            </div>
        </router-link>
    </div>
    
    <div class="box-bottom">
        <div class="box-bottom-1"></div>
        <div class="box-bottom-2"></div>
    </div>
    
</div>
</template>

<script>
export default {
    name:'Navigation',
    data(){
        return{
            topIcon:[
                {
                    to:'/money',
                    href:'#Pencil',
                    activeFlag: false,
                },
                {
                    to:'/label',
                    href:'#Label',
                    activeFlag: false,
                },
                {
                    to:'/account',
                    href:'#Notebook',
                    activeFlag: false                    
                },
                {
                    to:'/recordList',
                    href:'#Bargraph',
                    activeFlag: false                    
                },
                
            ],
            bottomIcon:[
                {
                    to:'/settings',
                    href:'#Settings',
                    activeFlag: false
                }
            ]
        }
    },
    watch:{
        $route(to,from){
            for(let i = 0;i<this.topIcon.length; i++){
                if(this.topIcon[i].to === to.path){
                    this.topIcon[i].activeFlag = true
                }
                if(this.topIcon[i].to === from.path){
                    this.topIcon[i].activeFlag = false
                }
            }
            for(let i = 0;i<this.bottomIcon.length; i++){
                if(this.bottomIcon[i].to === to.path){
                    this.bottomIcon[i].activeFlag = true
                }
                if(this.bottomIcon[i].to === from.path){
                    this.bottomIcon[i].activeFlag = false
                }
            }
            true
        },
    },
    mounted(){
        for(let i = 0;i<this.topIcon.length;i++){
            if(this.topIcon[i].to === this.$route.path){
                this.topIcon[i].activeFlag = true
            }else{
                this.topIcon[i].activeFlag = false
            }
        }
        for(let i = 0;i<this.bottomIcon.length;i++){
            if(this.bottomIcon[i].to === this.$route.path){
                this.bottomIcon[i].activeFlag = true
            }else{
                this.bottomIcon[i].activeFlag = false
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.theNavigation{
    height: 93.6vh;
    width: 20vw;
    margin-top: 4.7vh;
}

.theNavigation .top-wrapper{
    height: 46%;
    width: 100%;

    display: flex;
    flex-direction: column;

    transform: translateY(1px);
    
    background: rgb(165, 150, 150);
}
.theNavigation .icon-wrapper{
    margin-top: -10%;
    margin-bottom: 20%;
    margin-left: auto;
    margin-right: auto;
    width: 15vw;
    height: 15vw;
    opacity: 1;
}
.theNavigation .icon-wrapper-bottom{
    margin-top: 15%;
    margin-bottom: -5%;
    margin-left: auto;
    margin-right: auto;
    width: 15vw;
    height: 15vw;
    opacity: 1;
}
    .theNavigation .icon{
        width: 100%;
        height: 100%;
    }

.theNavigation .bottom-wrapper{
    height: 46%;
    width: 100%;

    display: flex;
    flex-direction: column-reverse;

    transform: translateY(-1px);

    background: rgb(165, 150, 150);
}

.box-top{
    height: 4%;
    width: 110%;
    display: flex;
}
    .box-top-1{
        height: 100%;
        width: 60%;

        border-radius: 50% 0% 0% 0%;

        transform: translate(0px,2px);

        background: rgb(165, 150, 150);
    }

    .box-top-2{
        height: 100%;
        width: 60%;

        border-radius: 0% 50% 0% 0%;

        transform: translate(-2.1vw,2px);

        background: rgb(165, 150, 150);
    }

.box-bottom{
    height: 4%;
    width: 110%;

    display: flex;
}
    .box-bottom .box-bottom-1{
        height: 100%;
        width: 50%;

        border-radius: 0% 0% 0% 50%;

        transform: translate(0px,-3px);
        background: rgb(165, 150, 150);
    }
    .box-bottom .box-bottom-2{
        height: 100%;
        width: 50%;

        border-radius: 0% 0% 50% 0%;

        transform: translate(-2.1vw,-3px);
        background: rgb(165, 150, 150);
    }
</style>