import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


import {APIKEY} from '@/secretkeys'

const APIURL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${APIKEY}`;

export default new Vuex.Store({
  state: {
    displaytext: '',
    fontSize: '20px',
    listView: false,
    fonts : [],
    searched: '',
    selectedFonts: [],
  },
  getters:{
    fonts: state => v => {
      if (v.length>0) {
        return state.fonts.filter(f=>f.family.toLowerCase().includes(state.searched.toLowerCase()))
      }else{
        return state.fonts
      }
    },
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
    setFonts(state, payload){
      state.fonts = payload;
    },
    setSearched(state,payload){
      state.searched = payload
    },
    addFont(state, payload){
      if (!state.selectedFonts.includes(payload)) {
        state.selectedFonts.push(payload)
        localStorage.setItem('fontlist', JSON.stringify(state.selectedFonts))
      }
    }
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
    loadFonts({commit}){
      const popularityurl = APIURL + "&sort=popularity"
      axios.get(popularityurl)
      .then(res=>{
        commit('setFonts', res.data.items)
      })
    },
    setSearched({commit},payload){
      commit('setSearched', payload)
    },
    addFont({commit}, payload){
      commit('addFont', payload)
    }
  },
  modules: {
  }
})
