<template>
<div class="theIcon">
    <svg class="icon-wrapper">
        <use class="icon" :xlink:href='href'/>
    </svg>
</div>
<!-- 
    输入：
        href：                 assets/icons下的svg图片名称前加#的字符串

    父容器宽高比：      1: 1
 -->
</template>

<script>
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try{
  importAll(require.context('../assets/icons',true,/\.svg$/))
}catch (error){
  console.log(error)
}

export default {
name:'Icon',
props:[
    'href',
],
}
</script>

<style lang="scss" scoped>
    .theIcon{
        width: 100%;
        height: 100%;
    }
        .icon-wrapper{
            width: 100%;
            height: 100%;
        }
</style>