<template>
    <div id="app">
        <input type="text" v-model="$store.state.key">
        <ul>
            <li v-for="msgs in filterSearchFor">{{msgs}}</li>
        </ul>
    </div>
</template>
<script>
import { mapActions,mapGetters} from 'vuex'
    export default {
       computed:mapGetters([
            'filterSearchFor'
        ])
    }
</script>
<style>
  
</style>