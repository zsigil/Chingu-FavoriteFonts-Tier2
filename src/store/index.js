import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displaytext: '',
    fontSize: '16px',
    listView: false,
  },
  mutations: {
    setDisplayText(state, payload){
      state.displaytext = payload;
    },
    setFontSize(state, payload){
      state.fontSize = payload;
    },
    setListView(state, payload){
      state.listView = payload;
    },
  },
  actions: {
    setDisplayText({commit}, payload){
      commit('setDisplayText', payload)
    },
    setFontSize({commit}, payload){
      commit('setFontSize', payload)
    },
    setListView({commit}, payload){
      commit('setListView', payload)
    },
  },
  modules: {
  }
})
