<template>
    <div class="list-wrapper">
        <div class="title">
            <div class="box-left"></div>
            <div class="content">
                <span>{{this.titleIcon}}</span>
            </div>
            <div class="box-right"></div>
        </div>
        <div class="list">
            <IconList 
            :iconList="this.iconList"
            :choseIcon="this.choseIcon"
            />
        </div>
    </div>
</template>

<script>
import IconList from '@/components/Label/Bottom/ModifyOrAddLabel/IconList.vue'
export default {
    name:'ChangeIcon',
    props:[
        'href',
        'setHref',
        'iconList',
        'choseIcon',
        'modify',
        'titleIcon',
    ],
    components:{
        IconList
    },
}
</script>

<style lang="scss" scoped>
            .list-wrapper{
                width: 95%;
                height: 95%;
                margin: auto;

                display: flex;
                flex-direction: column;

                border-radius: 5%;

                background: rgb(240, 235, 225);
            }
                .list-wrapper .title{
                    margin: auto;
                    width: 95%;
                    height: 15%;

                    margin-bottom: 0;
                    
                    display: flex;
                }
                .list-wrapper .title .box-left{
                    height: 100%;
                    width: 10%;
                    margin: auto;
                    border-radius: 50% 0% 0% 50%;
                    transform: translate(1px);
                    background: rgb(135, 120, 120);
                }
                .list-wrapper .title .box-right{
                    height: 100%;
                    width: 10%;
                    margin: auto;
                    border-radius: 0% 50% 50% 0%;
                    transform: translate(-1px);
                    background: rgb(135, 120, 120);
                }
                .list-wrapper .title .content{
                    width: 80%;
                    height: 100%;
                    margin: auto;
                    display: flex;
                    background: rgb(135, 120, 120);
                }
                    .list-wrapper .title .content span{
                        margin: auto;
                        transform: translate(-2px);
                        color: white;
                    }
                .list-wrapper .list{
                    margin: auto;
                    width: 95%;
                    height: 75%;
                }
</style>