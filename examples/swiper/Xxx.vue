<template>
    <div id="app">
        <app-banner :listImg="listImg"></app-banner>
    </div>
</template>
<script>
import Banner from './banner.vue'
    export default {
       data(){
           return {
               listImg:[{
                   url:'images/pic_1.png',
               },{
                   url:'images/pic_2.jpg',
               },{
                   url:'images/pic_3.jpg',
               }]
           }
       },
       components:{
           'app-banner':Banner
       }
    }
</script>
<style scoped>
    ul li{
        list-style-type: none;
        display:inline-block;
        padding:10px;
        border: 1px solid red;
        cursor: pointer;
    }
   li+li{
       border-left:0px;
    }
    .active{
        background: red;
        color:#fff;
    }
</style>