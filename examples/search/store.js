
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    key: "",  
    shoppingList:[{
            name:"Milk"
        },
        { 
            name:"Donuts"
        },
        { 
            name:"ahdjg"
        }]
}
const getters={
    filterSearchFor:state=>{
        var key = state.key;
        var shoppingList = [];
        for(var i=0;i<state.shoppingList.length;i++){
            shoppingList.push(state.shoppingList[i].name);
        }
        return shoppingList.filter(function (item) {
            return item.toLowerCase().indexOf(key.toLowerCase()) != -1
        });
    }
}
const mutations={
 
}
const actions={
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
  })