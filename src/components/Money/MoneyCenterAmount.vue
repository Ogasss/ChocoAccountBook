<template>
    <div class="amount">
        <div class="box-left"></div>

        <div class="content">

            <div class="icon-wrapper-content">
                <div class="icon">
                    <LabelIcon :href="label.href" :activeFlag="label.Flag"/>
                </div>
                    <span>{{label.text}}</span>
            </div>


            <div class="value-wrapper">
                <span>{{amount}}</span>
            </div>
        </div>

        <div class="box-right"></div>
    </div>
</template>

<script>
export default {
name:'MoneyCenterAmount',
props:[
    'amount',
    'labelList'
],
computed:{
    label(){
        let labelList = this.labelList
        for(let i=0;i<labelList.length;i++){
            if(labelList[i].activeFlag){
                return labelList[i]
            }
        }
        return {href:'',text:'',Flag:true}
    }
}
}
</script>

<style lang="scss" scoped>
.theMoney .center .amount{
    width: 95.5%;
    height: 80%;

    margin: auto;

    display: flex;
}

    .theMoney .center .amount .box-left{
        height: 100%;
        width: 10%;

        border-radius: 30% 0% 0% 30%;

        transform: translate(1px);

        background: rgb(240, 235, 225);
    }
    .theMoney .center .amount .box-right{
        height: 100%;
        width: 10%;

        border-radius: 0% 30% 30% 0%;

        transform: translate(-1px);

        background: rgb(240, 235, 225);
    } 
    .theMoney .center .amount .content{
        height: 100%;
        width: 80%;

        display: flex;

        justify-content: space-between;

        background: rgb(240, 235, 225);
    }
    .content .icon-wrapper-content{
        margin-top: auto;
        margin-bottom: auto;
        height: 80%;
        width: 35%;
        display: flex;

        transform: translate(-20%);
    }

    .content .icon-wrapper-content .icon{
        height: 6vh;
        width: 6vh;
    }

    .content .icon-wrapper-content span{
        font-size: 18px;
        color: rgb(110, 95, 85);

        margin:auto;
    }

    .theMoney .center .amount .content .value-wrapper{
        display: flex;
    }
        .theMoney .center .amount .content .value-wrapper span{
            margin: auto;
            font-size: 18px;
            color: rgb(110, 95, 85);
        }
</style>