import Vue from 'vue'
import Vuex from 'vuex'
import index_module from './index/index'
import commom from './commom/commom'
import merchant from './merchant/merchant'
Vue.use(Vuex)

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
}

export default new Vuex.Store({
	state,
    getters,
    mutations,
    actions,
    modules: {
        index: index_module,
        commom: commom,
        merchant: merchant
    }
})