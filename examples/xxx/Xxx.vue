<template>
    <div id="app">
        <ul >
            <li v-for="(msgs,index) in  $store.state.msg" :class="{'active':index==$store.state.nowIndex}" @click="addActive(index)">{{msgs.name}}</li>
        </ul>
    </div>
</template>
<script>
import { mapActions,mapGetters} from 'vuex'
    export default {
        computed:mapGetters([
            'msg'
        ]),
        methods:{
            addActive(index){
                this.$store.dispatch('addActive',index)
            }
        }
    }
</script>
<style>
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