import 'Styles/main.scss';
import Vue from 'vue';
import router from 'Router';
import store from 'Store';

new Vue({
  router,
  store,
  render: h => h('router-view')
}).$mount('#app');
