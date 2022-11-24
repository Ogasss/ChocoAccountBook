<template>
<div class="theAccount">
    <div class="title-wrapper">
        <Title/>
    </div>

    <div class="content-wrapper">
        <Content/>
    </div>
    
</div>  
</template>

<script>
import Title from '@/components/Account/Title.vue'
import Content from '@/components/Account/Content.vue'

export default {
name:'Account',
components:{
    Title,
    Content
}
}
</script>

<style lang="scss" scoped>
    .theAccount{
        width: 100%;
        height: 100%;
    }
        .title-wrapper{
            margin-top: 2%;
            width: 100%;
            height: 6%;

            display: flex;
        }
        .content-wrapper{
            width: 100%;
            height: 92%;
            
            display: flex;
        }
</style>