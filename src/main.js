import Vue from 'vue'
import App from './App.vue'
import router from './router/routes';
import './plugin/vue-global-components.js';
import './plugin/vue-global-variables.js';
import './plugin/vue-filters.js'
import store from './vuex/store.js'

import AlertService from './plugin/alert-plugin.js';

Vue.use(AlertService);

import './assets/css/utility.css'
Vue.config.productionTip = false
new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
