<template>
    <div class="theCancel">
        <div :class="colorType ? 'left-type' : 'left'">

        </div>

        <div :class="colorType ? 'wrapper-type':'wrapper'">
            <div class="icon">
                <Icon :href='href'/>            
            </div>
            <div class="textWrapper">
                <div :class="colorType ? 'text-type' : 'text'">{{text}}</div>            
            </div>
        </div>

        <div :class="colorType ? 'right-type' : 'right'">

        </div>
    </div>
    <!-- 
        输入:
            colorType:      false:浅色          true：深色
            text:           确定：确定按钮       取消：取消按钮
        固定宽高
     -->
</template>

<script>
export default {
name:'Confirm',
computed:{
    href(){
        if(this.text === '确定'){
            return '#Affirm'
        }else if(this.text === '取消'){
            return '#Error'
        }else{
            return null
        }
    }
},
props:[
    'text',
    'colorType'
],
}
</script>

<style lang="scss" scoped>
.theCancel{
    width: 30vw;
    height: 10vw;
    
    display: flex;

}

    .theCancel .left{
        width: 20%;
        height: 100%;

        border-radius: 50% 0% 0% 50%;
        transform: translate(1px);

        background: rgb(215, 210, 185);
    }
    .theCancel .left-type{
        width: 20%;
        height: 100%;
        
        border-radius: 50% 0% 0% 50%;
        transform: translate(1px);

        background: rgb(240, 235, 225);
    }
    .theCancel .right{
        width: 20%;
        height: 100%;
        
        border-radius: 0% 50% 50% 0%;
        transform: translate(-1px);

        background: rgb(215, 210, 185);
    }
    .theCancel .right-type{
        width: 20%;
        height: 100%;
        
        border-radius: 0% 50% 50% 0%;
        transform: translate(-1px);
        
        background: rgb(240, 235, 225);
    }

    .theCancel .wrapper{
        width: 60%;
        height: 100%;

        display: flex;

        background: rgb(215, 210, 185);
    }
    .theCancel .wrapper-type{
        width: 60%;
        height: 100%;

        display: flex;

        background: rgb(240, 235, 225);
    }
        .theCancel .icon{            
            height: 72%;
            width: 40%;

            transform: translate(20%);

            margin-left: -20%;
            margin-top: auto;
            margin-bottom: auto;
        }   

        .theCancel .textWrapper{
            margin-left: 20%;
            margin-top: auto;
            margin-bottom: auto;
            margin-right: -20%;

            display: flex;
        }
            .theCancel .textWrapper .text{
                margin: auto;
                font-size: 2.5vh;

                color: rgb(255, 255, 255);
            }
            .theCancel .textWrapper .text-type{
                margin: auto;
                font-size: 2.5vh;

                color: rgb(110, 95, 85);
            }

    
</style>