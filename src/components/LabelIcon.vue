<template>
<div :class="activeFlag ? 'icon-wrapper active' : 'icon-wrapper'">
    <div class="icon">
        <Icon :href="href"/>
    </div>
    <div class="text-wrapper">
        <span class="text">
            {{text}}
        </span>
    </div>
</div>

<!-- 
    输入：
        href：          assets/icons下的svg图片名称前加#的字符串
        text：          图标下的说明文字
        activeFlag：    接受来自调用组件的变量，用该变量控制标签的是否激活

    父容器宽高比:       1: 1
 -->

</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
name:'LabelIcon',
props:[
    'text',
    'href',
    'activeFlag'
],
components:{
    Icon
}
}
</script>

<style lang="scss" scoped>
    .icon-wrapper{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 25%;

        background: rgb(185, 170, 155);
    }
        .icon{
            width: 57%;
            height: 57%;

        }
        .active{
            background: rgb(240, 240, 225);
            transform: translate(0);
        }

        .text-wrapper{
            display: flex;
        }
            .text-wrapper .text{
                font-size: 100%;
                margin: auto;
                color: rgb(110, 95, 85);
                text-shadow: 0 0 10px rgb(185, 170, 155,0.6), 0 0 20px rgb(185, 170, 155,0.6), 0 0 40px rgb(185, 170, 155,0.6);
            }
</style>