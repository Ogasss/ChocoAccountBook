<template>
<div class="theBookAdmin">
    <Top :accountBook="this.accountBook"/>
    <List 
    :accountBookOfRecordList="this.accountBookOfRecordList"
    :listOrder="this.listOrder"
    :setOrder="this.setOrder"
    />
</div>
</template>

<script>
import Top from '@/components/Account/Content/BookAdmin/Top.vue'
import List from '@/components/Account/Content/BookAdmin/List'
export default {
name:'BookAdmin',
props:[
    'accountBook',
    'accountBookOfRecordList',
    'listOrder',
    'setOrder',
],
components:{
    Top,
    List
}
}
</script>

<style lang="scss" scoped>
    .theBookAdmin{
        margin: auto;
        width: 95%;
        height: 100%;
    }
</style>