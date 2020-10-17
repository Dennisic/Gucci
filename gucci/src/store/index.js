import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import cart from './cart'

const state = {}
const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    cart
  }   //合并小的store到大的store身上
})