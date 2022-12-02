<template>
<div class="theModifyAccount">
    <div class="wrapper">
        <div class="top">
            <Title :titleText="`更改账单名称`"/>
        </div>

        <div class="input-wrapper">
            <div class="theInput">
                <div class="icon">
                    <Icon :href="`#Tools`"/>
                </div>
                
                <input 
                    type="text"
                    :value='newAccount'
                    class="input"
                    @input="onInput"
                    placeholder="这里输入更改的名称~"
                    maxlength="4"
                />

            </div>
        </div>

        <div class="confirm">
            <div @click="choseModifyName()" class="theConfirm">
                <span>取消</span>
            </div>

            <div @click="setNewName()" class="theConfirm">
                <span>确定</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Title from '@/components/Label/Bottom/ModifyOrAddLabel/Title.vue'
export default {
name:'ModifyName',
props:[
    'choseModifyName',
    'newAccount',
    'getNewName',
    'setNewName'
],
data(){
    return{
        inputNumber:'',
    }
},
components:{
    Title
},
methods:{
    onInput(event){
        const input = event.target.value
        this.getNewName(input)
    },
}
}
</script>

<style lang="scss" scoped>
.theModifyAccount{
    border-radius: 5%;

    background: rgb(215, 215, 190);

    height: 100%;
    display: flex;
}
    .wrapper{
        height: 95%;
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
        .wrapper .top{
            height: 35%;
        }
        .wrapper .input-wrapper{
            margin-top: 1%;
            height: 30%;
            width: 95%;
            margin-left: auto;
            margin-right: auto;
            display: flex;
        }
            .wrapper .input-wrapper .theInput{
                display: flex;
                margin: auto;
                justify-content: space-around;
                border-radius: 5%;
                background: rgb(240, 235, 225);
            }
            .wrapper .input-wrapper .input{
                margin-left: 5%;
                color: rgb(135, 120, 120);
            }
            .wrapper .input-wrapper .input::placeholder{
                color: rgb(135, 120, 120);
            }
            .wrapper .input-wrapper .icon{
                margin: auto;
                height: 30px;
                width: 75px;
            }
        .wrapper .confirm{
            margin: auto;
            width: 70%;
            height: 25%;
            display: flex;
            justify-content: space-between;
        }
        .confirm .theConfirm{
            border-radius: 10%;
            width: 40%;
            display: flex;
            background: rgb(240, 235, 225);
        }
            .theConfirm span{
                color: rgb(135, 120, 120);
                margin: auto;
            }
</style>