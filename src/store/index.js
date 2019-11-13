import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const elComputedStyle = getComputedStyle(document.documentElement);
const defaultMainContainerBackgroundColor = elComputedStyle.getPropertyValue('--color-page-bg');

export default new Vuex.Store({
  state: {
    mainContainerStyle: {
      backgroundColor: defaultMainContainerBackgroundColor
    }
  },
  mutations: {
    SET_MAIN_CONTAINER_STYLE: (state, color) => {
      state.mainContainerStyle.backgroundColor = color;
    },
    RESET_MAIN_CONTAINER_STYLE: (state) => {
      state.mainContainerStyle.backgroundColor = defaultMainContainerBackgroundColor;
    }
  }
})
