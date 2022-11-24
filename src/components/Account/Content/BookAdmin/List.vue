<template>
<div class="list-wrapper">
    <Top 
    :listOrder="this.listOrder"
    :setOrder="this.setOrder"
    />
    
    <div class="list">
        <div  v-for="record in this.accountBookOfRecordList" :key="record.id"  class="list-item">
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

</div>
</template>

<script>
import Top from '@/components/Account/Content/BookAdmin/List/Top.vue'
export default {
name:'List',
props:[
    'accountBook',
    'accountBookOfRecordList',
    "listOrder",
    "setOrder",
],
components:{
    Top,
},
}
</script>

<style lang="scss" scoped>
span{
    color: white;
}
.list-wrapper{
    width: 100%;
    height: 92%;
}

    .list-wrapper .list{
        height: 90%;
        width: 100%;
        overflow: auto;
    }
        .list-wrapper .list .list-item{
            margin-bottom: 10px;
            width: 100%;
            height: 10%;
            background: rgb(205, 190, 175);
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
</style>