import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const elComputedStyle = getComputedStyle(document.documentElement);

export default new Vuex.Store({
  state: {
    mainContainerStyle: {
      backgroundColor: elComputedStyle.getPropertyValue('--color-page-bg')
    }
  },
  mutations: {
    SET_MAIN_CONTENT_STYLE: (state, color) => {
      state.mainContainerStyle.backgroundColor = color;
    }
  }
})
