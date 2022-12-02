<template>
<div class="theBookAdmin">
    <Top 
    :accountBook="this.accountBook"
    :modifyNameFlag="this.modifyNameFlag"
    :choseModifyName="this.choseModifyName"
    />

    <RecordList 
    :accountBookOfRecordList="this.accountBookOfRecordList"
    :listOrder="this.listOrder"
    :setOrder="this.setOrder"

    :getChosedRecord="this.getChosedRecord"
    :hideModifyRecord="this.hideModifyRecord"
    :modifyRecordFlag="this.modifyRecordFlag"
    :chosedRecord="this.chosedRecord"

    :modifyNameFlag="this.modifyNameFlag"
    :choseModifyName="this.choseModifyName"
    :getNewName="this.getNewName"
    :setNewName="this.setNewName"
    />
</div>
</template>

<script>
import Top from '@/components/Account/Center/Content/Center/BookAdmin/Top.vue'
import RecordList from '@/components/Account/Center/Content/Center/BookAdmin/Center/RecordList.vue'
export default {
name:'BookAdmin',
props:[
    'accountBook',
    'accountBookOfRecordList',
    'listOrder',
    'setOrder',

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
    RecordList
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