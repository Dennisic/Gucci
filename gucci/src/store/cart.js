import { reqShopCartList } from '../api'

const state = {
  shopCartList: []
}

const mutations = {
  RECEIVESHOPCARTLIST(state, shopCartList) {
    state.shopCartList = shopCartList
  }
}

const actions = {
  async getShopCartList({ commit }) {
    const result = await reqShopCartList()
    if (result.cartList.code === 200) {
      commit('RECEIVESHOPCARTLIST', result.cartList.data)
    }
  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}