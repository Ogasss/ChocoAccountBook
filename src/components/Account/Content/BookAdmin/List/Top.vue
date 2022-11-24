<template>
<div class="list-top">
    <div class="top-wrapper">
        <div class="item-wrapper type">
            <div
             @click="typeClick()"
             :class="typeFlag ?'item item-active':'item'">
                <span>类型</span>
            </div>
            <transition name="itemList">
                <div v-show="typeFlag" class="active-list type">
                    <div 
                    :class="(this.listOrder.type === '收入')&&'active'"
                    @click="setOrder('type','收入')"
                    >
                        <span>收入</span>
                    </div>
                    <div 
                    :class="(this.listOrder.type === '支出')&&'active'"
                    @click="setOrder('type','支出')"
                    >
                        <span>支出</span>
                    </div>
                    <div 
                    :class="(this.listOrder.type === '全部')&&'active'"
                    @click="setOrder('type','全部')"
                    >
                        <span>全部</span>
                    </div>
                </div>            
            </transition>
        </div>
        <div class="item-wrapper label">
            <div class="item">
                <span>标签</span>
            </div>
        </div>
        <div class="item-wrapper date">
            <div
             @click="dateClick()"
             :class="dateFlag ?'item item-active':'item'">
                <span>日期</span>
            </div>
            <transition name="itemList">
                <div v-show="dateFlag" class="active-list date">
                    <div 
                    :class="(this.listOrder.order.anchor === '日期'&&this.listOrder.order.order === '升序')&&'active'"
                    @click="setOrder('anchor','日期');setOrder('order','升序')"
                    >
                        <span>升序</span>
                    </div>
                    <div 
                    :class="(this.listOrder.order.anchor === '日期'&&this.listOrder.order.order === '降序')&&'active'"
                    @click="setOrder('anchor','日期');setOrder('order','降序')"
                    >
                        <span>降序</span>
                    </div>
                </div>            
            </transition>
        </div>
        <div class="item-wrapper account">
            <div
             @click="accountClick()"
             :class="accountFlag ?'item item-active':'item'">
                <span>金额</span>
            </div>
            <transition name="itemList">
                <div v-show="accountFlag" class="active-list account">
                    <div 
                    :class="(this.listOrder.order.anchor === '金额'&&this.listOrder.order.order === '升序')&&'active'"
                    @click="setOrder('anchor','金额');setOrder('order','升序')"
                    >
                        <span>升序</span>
                    </div>
                    <div :class="(this.listOrder.order.anchor === '金额'&&this.listOrder.order.order === '降序')&&'active'"
                    @click="setOrder('anchor','金额');setOrder('order','降序')"
                    >
                        <span>降序</span>
                    </div>
                </div>            
            </transition>
        </div>
    </div>
</div>
</template>

<script>
export default {
name:'Top',
props:[
    'listOrder',
    'setOrder'
],
data(){
    return{
        typeFlag: false,
        dateFlag: false,
        accountFlag: false,
    }
},
methods:{
    typeClick(){
        this.dateFlag = false
        this.accountFlag = false
        if(!this.typeFlag){
            this.typeFlag = true
        }else{
            this.typeFlag = false
        }
    },
    dateClick(){
        this.typeFlag = false
        this.accountFlag = false
        if(!this.dateFlag){
            this.dateFlag = true
        }else{
            this.dateFlag = false
        }
    },
    accountClick(){
        this.typeFlag = false
        this.dateFlag = false
        if(!this.accountFlag){
            this.accountFlag = true
        }else{
            this.accountFlag = false
        }
    },//上述都为导航选项高亮方法
}
}
</script>

<style lang="scss" scoped>
span{
    color: white;
}
.list-top{
        width: 100%;
        height: 10%;
    }
        .list-top .top-wrapper{
            width: 100%;
            height: 80%;
            display: flex;
            background: rgb(185, 170, 155);
        }
        .list-top .item-wrapper{
            height: 100%;
        }
            .type{
                width: 20%;
            }
            .label{
                width: 20%;
            }
            .date{
                width: 35%;
            }
            .account{
                width: 25%;
            }
            .list-top .item-wrapper .item{
                height: 100%;
                display: flex;
            }
            .list-top .item-wrapper .item-active{
                border-radius: 10%;
                background: rgb(135, 120, 120);
            }
            .list-top .item-wrapper .item span{
                margin: auto;
            }
            .list-top .item-wrapper .active-list{
                position: absolute;
                z-index: 2;
            }
                .list-top .item-wrapper .active-list div{
                    margin-top: 5px;
                    margin-left: auto;
                    margin-right: 15%;
                    height: 30px;
                    width: 80%;
                    display: flex;
                    background: rgb(185, 170, 155);
                    
                }
                .list-top .item-wrapper .active-list .active{
                    background: rgb(165, 150, 135);
                }
                .list-top .item-wrapper .active-list .active span{
                    color: white;
                }
                .list-top .item-wrapper .active-list div>span{
                    margin: auto;
                    color: rgb(135, 120, 120);
                }
.itemList-enter{
    opacity: 0;
    transform: translateY(-30px);
}
.itemList-enter-to{
    opacity: 1;
    transform: translateY(0px);
}
.itemList-enter-active{
    transition: all 0.3s ease;
}
.itemList-leave{
    opacity: 1;
    transform: translateY(0px);
}
.itemList-leave-to{
    opacity: 0;
    transform: translateY(-30px);
}
.itemList-leave-active{
    transition: all 0.3s ease;
}
</style>