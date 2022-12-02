<template>
<div class="list-wrapper">
    <Top 
    :listOrder="this.listOrder"
    :setOrder="this.setOrder"
    :hideModifyRecord="this.hideModifyRecord"
    />

    <div 
    :class="modifyRecordFlag ? 'list list-Record' :
            modifyNameFlag ? 'list list-Account' : 'list'">
        <div  
        @click="getChosedRecord(record)"
        v-for="record in this.accountBookOfRecordList" 
        :key="record.id"  
        :class="chosedRecord === record ?'list-item active':'list-item'">
            <div class="item">
                <div class="text type">
                    <span>
                        {{record.type}}
                    </span>
                </div>
                <div class="text label">
                    <span>
                        {{record.label}}
                    </span>
                </div>
                <div class="text date">
                    <span>
                        {{record.date}}
                    </span>
                </div>
                <div class="text account">
                    <span>
                        {{record.account}}
                    </span>
                </div>
            </div>
        </div>
    </div>

    <transition name="modify">
        <div v-show="modifyRecordFlag" class="modifyRecord">
            <ModifyRecord :chosedRecord = "this.chosedRecord"/>
        </div>
    </transition>
    
    <transition name="modify">
        <div v-show="modifyNameFlag" class="modifyAccount">
            <ModifyName 
            :choseModifyName="this.choseModifyName"
            :getNewName="this.getNewName"
            :setNewName="this.setNewName"
            />
        </div>
    </transition>
        
</div>
</template>

<script>
import Top from '@/components/Account/Center/Content/Center/BookAdmin/Top/Top.vue'
import ModifyRecord from '@/components/Account/Center/Content/Center/BookAdmin/Bottom/ModifyRecord.vue'
import ModifyName from '@/components/Account/Center/Content/Center/BookAdmin/Bottom/ModifyName.vue'

export default {
name:'RecordList',
props:[
    'accountBook',
    'accountBookOfRecordList',
    "listOrder",
    "setOrder",

    'getChosedRecord',
    'hideModifyRecord',
    'modifyRecordFlag',
    'chosedRecord',

    'modifyNameFlag',
    'choseModifyName',
    'getNewName',
    'setNewName',
],
components:{
    Top,
    ModifyRecord,
    ModifyName,
},
}
</script>

<style lang="scss" scoped>
    span{
        color: white;
    }
    .list-wrapper{
        position: relative;
        width: 100%;
        height: 92%;
    }

        .list-wrapper .list{
            height: 90%;
            width: 100%;
            overflow: auto;
        }
        .list-wrapper .list-Record{
            height: 30%;
        }
        .list-wrapper .list-Account{
            height: 55%;
        }
            .list-wrapper .list .list-item{
                margin-bottom: 10px;
                width: 100%;
                height: 50px;
                background: rgb(205, 190, 175);
            }
                .list-wrapper .list .active{
                    background: rgb(135, 120, 120);
                }
                .list-wrapper .list .list-item .item{
                    width: 100%;
                    height: 80%;
                    display: flex;
                }
                    .text{
                        height: 100%;
                        display: flex;
                    }
                    .item .type{
                        width: 20%;
                    }
                    .item .label{
                        width: 20%;
                    }
                    .item .date{
                        width: 35%;
                    }
                    .item .account{
                        width: 25%;
                    }
                    .item span{
                        margin: auto;
                    }

    .modifyRecord{
        position: absolute;
        width: 100%;
        height: 55%;
        bottom: 0;
    }
    .modifyAccount{
        position: absolute;
        width: 100%;
        height: 30%;
        bottom: 0;
    }

    .modify-enter{
        opacity: 0;
        transform: translateY(50%);
    }
    .modify-enter-to{
        opacity: 1;
        transform: translateY(0%);
    }
    .modify-enter-active{
        transition: 0.3s all ease;
    }
    .modify-leave{
        opacity: 1;
        transform: translateY(0%);
    }
    .modify-leave-to{
        opacity: 0;
        transform: translateY(50%);
    }
    .modify-leave-active{
        transition: 0.3s all ease;
    }
</style>