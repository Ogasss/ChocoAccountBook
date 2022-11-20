<template>
<div class="box-wrapper-app">
    <Layout/>
</div>
</template>
<script>
import Layout from '@/Layout'
export default {
    components:{
        Layout
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
}
*::before, *::after{
    box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6{
    font-weight: normal;
}
a{
    color: inherit;
    text-decoration: none;
}
ul,ol{
    list-style: none;
}
table{
    border-collapse: collapse;
    border-spacing: 0;
}
button{
    border: 0px;
    background: none;
}
input{
  border: 0;
  background: none;
  outline: 0;
}
body{
  background:rgb(240, 240, 240)
}
</style>