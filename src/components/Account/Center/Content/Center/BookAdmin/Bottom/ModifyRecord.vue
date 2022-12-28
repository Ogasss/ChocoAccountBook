<template>
<div class="theModifyRecord">
    <div class="top">
        <Title :titleText="`账单信息`"/>
    </div>

    <div class="content">
        <div class="message">
            <div class="icon">
                <Icon :href="`#Label-add`"/>
            </div>
            <div class="record">
                <span>
                    {{chosedRecord.type}}
                </span>
                <span>
                    {{chosedRecord.label}}
                </span>
                <span>
                    {{chosedRecord.date}}
                </span>
                <span>
                    {{chosedRecord.account}}
                </span>
            </div>
        </div>

        <div class="note">
            <div class="title">

                <div class="icon">
                    <Icon :href="`#Pencil`"/>
                </div>

                <span>
                    备注：
                </span>
            </div>

            <div class="theNote">
                <span>
                    {{note}}
                </span>
            </div>
        </div>

        
        <div class="delete">
            <transition name="delete">
                <div @click="showAndHideDelete()" v-show="!deleteFlag" class="wrapper">
                    <div class="icon">
                        <Icon :href="`#Error`"/>
                    </div>
                    <div class="text">
                        <div class="box left"></div>

                        <div class="box-content">
                            <span>
                                删除该笔账单！
                            </span>
                        </div>
                        
                        <div class="box right"></div>
                    </div>
                </div>
            </transition>
            <transition name="delete">
                <div v-show="deleteFlag" class="wrapper">
                    <div @click="deleteRecord(chosedRecord.id)" class="confirm">
                        <span>确定</span>
                    </div>

                    <div @click="showAndHideDelete()" class="confirm">
                        <span>取消</span>
                    </div>
                </div>
            </transition>
        </div>
    </div>

</div>
</template>

<script>
import Title from '@/components/Label/Bottom/ModifyOrAddLabel/Title.vue'
import recordListModel from '@/models/recordListModel'

export default {
name:'ModifyRecord',
data(){
    return{
        deleteFlag: false
    }
},
computed:{
    note(){
        if(this.chosedRecord.note === ''){
            return '该笔账单没有写备注哦~'
        }else{
            return this.chosedRecord.note
        }
    },
},
methods:{
    showAndHideDelete(){
        this.deleteFlag ? this.deleteFlag = false : this.deleteFlag = true
    },
    deleteRecord(value){
        console.log(value)
        recordListModel.deleteRecord(value)
        this.$router.go(0)
    }
},
props:[
    'chosedRecord'
],
components:{
    Title
}
}
</script>

<style lang="scss" scoped>
span{
    margin: auto;
    color: rgb(135, 120, 120);
}
.theModifyRecord{
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgb(215, 215, 190);
    display: flex;
    flex-direction: column;
}
.top{
    margin: auto;
    margin-bottom: 0;
    margin-top: 2%;
    width: 98%;
    height: 20%;
}
.content{
    background: rgb(240, 235, 225);
    border-radius: 15px;;
    margin: auto;
    margin-top: 2%;
    width: 95%;
    height: 70%;

    display: flex;
    flex-direction: column;
}
    .content .message{
        margin-top: 5%;
        height: 25%;
        width: 100%;
        display: flex;
    }
        .content .message .icon{
            height: 40px;
            width: 40px;
            margin: auto;
        }
        .content .message .record{
            width: 80%;
            height: 80%;
            margin: auto;
            transform: translate(-8px);
            background: rgb(215, 215, 190);
            border-radius: 15px;
            display: flex;
        }
            .content .message .record span{
                margin: auto;
                color: rgb(135, 120, 120);
            }
    .content .note{
        height: 20%;
        width: 100%;
        margin-top: 2%;
        display: flex;
    }
        .content .note .title{
            margin: auto;
            margin-right: 5px;
            width: 30%;
            height: 80%;
            display: flex;
            background: rgb(215, 215, 190);
        }
            .content .note .title .icon{
                height: 35px;
                width: 35px;
                margin: auto;               
            }
        .content .note .theNote{
            margin: auto;
            margin-left: 0;
            height: 80%;
            width: 60%;
            background: rgb(215, 215, 190);
            display: flex;
        }
        .content .delete{
            margin: auto;
            margin-top: 5%;
            width: 85%;
            height: 25%;
            display: flex;
            position: relative;
        }
        .content .wrapper{
            width: 100%;
            height: 100%;
        }
            .content .delete .icon{
                position: absolute;
                width: 15%;
                height: 100%;
                transform: translate(20px,0px);
                z-index: 2;
            }
            .content .delete .text{
                position: absolute;
                left: 8%;
                width: 100%;
                height: 100%;
                transform: translate(-20px);
                margin: auto;
                display: flex;
            }
                .content .delete .text .box{
                    margin-top: auto;
                    margin-bottom: auto;
                    width: 15%;
                    height: 80%;
                    background: rgb(135, 120, 120);
                }
                .content .delete .text .box-content{
                    margin-top: auto;
                    margin-bottom: auto;
                    width: 50%;
                    height: 80%;
                    display: flex;
                    background: rgb(135, 120, 120);
                }
                    .content .delete .text .box-content span{
                        color: white;
                        margin: auto;
                    }
                    .content .delete .text .left{
                        margin-left: auto;
                        transform: translate(1px);
                        border-radius: 50% 0% 0% 50%;
                    }
                    .content .delete .text .right{
                        margin-right: auto;
                        transform: translate(-1px);
                        border-radius: 0% 50% 50% 0%;
                    }
            .content .wrapper{
                display: flex;
            }
            .content .confirm{
                margin: auto;
                background: rgb(135, 120, 120);
                border-radius: 10%;
                width: 30%;
                height: 80%;
                display: flex;
            }
                .content .confirm span{
                    color: white;
                }

.delete-enter{
    opacity: 0;
    transform: translate(-60px);
}
.delete-enter-to{
    opacity: 1;
    transform: translate(0px);
}
.delete-enter-active{
    transition: all 0.6s ease;
}
</style>