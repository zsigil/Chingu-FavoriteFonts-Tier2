import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displaytext: '',
    fontSize: '16px'
  },
  mutations: {
    setDisplayText(state, payload){
      state.displaytext = payload;
    },
    setFontSize(state, payload){
      state.fontSize = payload;
    },
  },
  actions: {
    setDisplayText({commit}, payload){
      commit('setDisplayText', payload)
    },
    setFontSize({commit}, payload){
      commit('setFontSize', payload)
    },
  },
  modules: {
  }
})
