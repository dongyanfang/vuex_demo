import 'babel-polyfill'
import Vue from 'vue'
import Xxx from './Xxx.vue'
import store from './store'

new Vue({ el: '#app', store, render: h => h(Xxx) });