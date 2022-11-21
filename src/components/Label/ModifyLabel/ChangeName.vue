<template>
<div class="theChangeName">
    <div class="icon-wrapper">
        <div class="icon">
            <LabelIcon :href="this.href" :text="this.text"/>
        </div>
    </div>

    <div class="content-wrapper">
        <div class="input-wrapper">
            <div class="box-left"></div>
            <div class="content">
                <input 
                    :value="text" 
                    type="text" 
                    @input="onInput"
                    maxlength="2"
                    placeholder="这里写标签名~"
                    />
            </div>
            <div class="box-right"></div>
        </div>
        <div class="confirm-wrapper">
            <div class="confirm">
                <Confirm :text="'删除'" :iconType="true" :colorType="true"/>
            </div>
            <div @click="this.modify" :iconType="false" class="confirm">
                <Confirm :text="`确定`"
                :colorType="true"
                />
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import Confirm from '@/components/Confirm.vue'
export default {
name:'ChangeName',
props:[
    'href',
    'text',
    'setText',
    'modify'
],
components:{
    Confirm
},
methods:{
    onInput(event){
        const input = event.target.value
        this.setText(input)
    }
},
}
</script>

<style lang="scss" scoped>
.theChangeName{
    margin: auto;
    width: 95%;
    height: 90%;

    display: flex;

    border-radius: 6%;
}
    .icon-wrapper{
        width: 25%;
        height: 100%;

        display: flex;
    }
        .icon{
            margin: auto;
            width: 95%;
            height: 95%;
        }

    .content-wrapper{
        width: 75%;
        height: 100%;

        display: flex;
        flex-direction: column;

    }
        .input-wrapper{
            margin: auto;
            width: 95%;
            height: 40%;
            display: flex;
        }
        .input-wrapper{

        }
            .box-left{
                width: 10%;
                height: 100%;
                border-radius: 50% 0% 0% 50%;
                transform: translate(1px);
                background: rgb(135, 120, 120);
            }
            .box-right{
                width: 10%;
                height: 100%;
                border-radius: 0% 50% 50% 0%;
                transform: translate(-1px);
                background: rgb(135, 120, 120);
            }
            .content{
                width: 80%;
                height: 100%;
                display: flex;
                background: rgb(135, 120, 120);
            }
                .content input{
                    color: white;
                    margin: auto;
                }
                .content input::placeholder{
                    color: white;
                }
        .confirm-wrapper{
            margin: auto;
            width: 95%;
            height: 40%;

            display: flex;
        }

            .confirm-wrapper .confirm{
                width: 50%;
                height: 50%;

                transform: translateY(-5px);
            }
</style>