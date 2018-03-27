import Vue from 'vue';
import VueResource from 'vue-resource';
import VueCookie from 'vue-cookie';
import router from './router';
import store from './store/index.js';

import App from './App';
import Home from './components/Home';
import NavButton from './components/atoms/NavButton';

Vue.use(VueResource);
Vue.http.options.credentials = true;
Vue.use(VueCookie);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, Home, NavButton },
  template: '<App/>'
})
