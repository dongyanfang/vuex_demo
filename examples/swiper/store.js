
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    msg:[{
        name:'html'
    },{
         name:'css'
    } ,{
        name:'javascript'
    },{
         name:'vue'
    }],
    nowIndex:0
}
const mutations={
    addActive(state,index){
        state.nowIndex=index;
    }
}
const actions={
    addActive:({commit},index)=>commit('addActive',index)
}
export default new Vuex.Store({
    state,
    mutations,
    actions
  })