<template>
<div class="theBottom">
    <div class="notes">
        <div class="icons">
            <div class="icon">
                <Icon :href="`#Calendar`"/>
            </div>
            <div @click="accountBookListShowFlag = !accountBookListShowFlag" class="icon">
                <Icon :href="`#Notebook`"/>
            </div>
        </div>

        <transition name="accountBookList">
            <div v-show="this.accountBookListShowFlag" class="accountBook-wrapper">
                <div :class="accountBook === book.name ? 'accountBook' : 'accountBook-active'" v-for="book in this.accountBookList" :key="book.name">
                    <div @click="setAccountBook(book.name)" class="span-wrapper">
                        <span class="text">
                            {{book.name}} 
                        </span>
                    </div>
                </div>
            </div>
        </transition> 

        <div class="note">
            <div class="note-wrapper">
                <div class="box-left"></div>
                <input 
                    class="note-input" 
                    :value="theNote" 
                    type="text" 
                    @input="onInput"
                    placeholder="这里写备注喵"
                    maxlength="12"
                    />
                <div class="box-right"></div>
            </div>
        </div>
    </div>
    <div class="computer">
        <div class="number-wrapper">
            <div v-for="number in numberKeysTop" :key="number" class="number">
                <div @click="keysDown(number)" class="theNumber">
                    <span class="theNumber-span">{{number}}</span>
                </div>
            </div>
            <div @click="okay" class="number">
                <div class="theNumber-ok">
                    <span class="theNumber-span">确定</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import accountBookList from '@/models/accountBookModel.js'
export default {
name:'MoneyBottom',
props:[
    'theNote',
    'amount',
    'keysDown',
    'getNote',
    'okay',
    'accountBook',
    'setAccountBook'
],
data(){
    return{
        numberKeysTop:[
            '1',
            '4',
            '7',
            '2',
            '5',
            '8',
            '3',
            '6',
            '9',
            '0',
            '.',
            '清空',
            '删除',
        ],
        note:'',
        accountBookList:[],
        accountBookListShowFlag: false
    }
},
methods:{
    onInput(event){
        const input = event.target.value
        this.getNote(input)
    },
    getAccountBook(){
        if(accountBookList.fetch()){
            this.accountBookList = accountBookList.fetch()
        }else{
            accountBookList.save(accountBookList.data)
            this.accountBookList = accountBookList.fetch()
        }

    }
},
mounted(){
    this.getAccountBook()
}
}
</script>

<style lang="scss" scoped>
    .theBottom{
        height: 95%;
        width: 95%;
        margin: auto;
        border-radius: 5%;

        background: rgb(185, 170, 155);
    }
        .notes{
            height: 20%;
            width: 97%;

            margin-left: 2%;

            display: flex;
        }
            .notes .icons{
                height: 100%;
                width: 25%;

                display: flex;
            }
                .notes .icons .icon{
                    height: 4vh;
                    width: 4vh;

                    margin: auto;

                }
            .notes .note{
                height: 100%;
                width: 75%;

                display: flex;

            }
                .notes .note .note-wrapper{
                    height: 60%;
                    width: 95%;

                    margin: auto;

                    display: flex;

                } 
                    .notes .note .note-wrapper .box-left{
                        height: 100%;
                        width: 10%;

                        border-radius: 50% 0% 0% 50%;

                        transform: translate(1px);

                        background: rgb(240, 235, 225);
                    }

                    .notes .note .note-wrapper .box-right{
                        height: 100%;
                        width: 10%;

                        border-radius: 0% 50% 50% 0%;

                        transform: translate(-1px);

                        background: rgb(240, 235, 225);
                    }

                    .notes .note .note-wrapper .note-input{
                        width: 80%;
                        height: 100%;

                        color: rgb(110, 95, 85);

                        background: rgb(240, 235, 225);
                    }


        .computer{
            width: 100%;
            height: 80%;

            display: flex;
        }

            .computer .number-wrapper{
                width: 95%;
                height: 95%;

                display: flex;
                flex-wrap: wrap;
                flex-direction: column;

                margin: auto;
                border-radius: 5%;
                
                background: rgb(240, 235, 225);
            }
             .number-wrapper .number{
                width: 20%;
                height: 33%;
                
                display: flex;
             }

                .number-wrapper .number .theNumber{
                    width: 80%;
                    height: 80%;

                    margin: auto;

                    display: flex;
                    
                    border-radius: 20%;
                    background: rgb(215, 215, 190);
                }

                .number-wrapper .number .theNumber-ok{
                    width: 80%;
                    height: 190%;

                    margin: auto;

                    display: flex;
                    
                    border-radius: 10%;
                    background: rgb(215, 215, 190);
                }

                    .theNumber-span{
                        margin: auto;
                        color: rgb(155, 140, 135);
                    }


.accountBook-wrapper{
    position: absolute;
    left: 11.5%;
    top: 65%;
    width: 80px;
    height: 80px;
    overflow: auto;
    display: flex;
    flex-direction: column;
}
    .accountBook-wrapper .accountBook{
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        border-radius: 10%;
        background: rgb(135, 120, 120);
    }
    .accountBook-wrapper .accountBook-active{
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        border-radius: 10%;
        background: rgb(95, 80, 85);
    }
        .accountBook-wrapper .span-wrapper{
            display: flex;
            height: 30px;
            width: 100%;
        }
            .accountBook-wrapper .text{
                margin: auto;
                color: white;
                font-size: 12px;
            }

.accountBookList-enter{
    transform: translateY(-50%);
    opacity: 0;
}
.accountBookList-enter-to{
    transform: translateY(0%);
    opacity: 1;
}
.accountBookList-enter-active{
    transition: all 0.8s ease;
}
.accountBookList-leave{
    transform: translateY(0%);
    opacity: 1;
}
.accountBookList-leave-to{
    transform: translateY(-50%);
    opacity: 0;
}
.accountBookList-leave-active{
    transition: all 0.8s ease;
}
</style>