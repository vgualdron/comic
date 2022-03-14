import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

require('./assets/scss/main.scss');
require('./plugins/fontawesome');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
