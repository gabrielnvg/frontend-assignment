import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const elComputedStyle = getComputedStyle(document.documentElement);
const defaultMainBackgroundColor = elComputedStyle.getPropertyValue('--color-background');

export default new Vuex.Store({
  state: {
    mainContainerStyle: {
      backgroundColor: defaultMainBackgroundColor
    }
  },
  mutations: {
    SET_MAIN_CONTAINER_STYLE: (state, color) => {
      state.mainContainerStyle.backgroundColor = color;
    },
    RESET_MAIN_CONTAINER_STYLE: (state) => {
      state.mainContainerStyle.backgroundColor = defaultMainBackgroundColor;
    }
  }
})
