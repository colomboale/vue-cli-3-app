import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

import i18n from './i18n';

import Buefy from 'buefy';
import 'buefy/src/scss/buefy-build.scss';

Vue.use(Buefy);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
