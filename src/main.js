import Vue from 'vue';
import resource from 'vue-resource';
import router from './router';
import store from './store/index.js';

import App from './App';
import Home from './components/Home';
import NavButton from './components/atoms/NavButton';

Vue.use(resource);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, Home, NavButton },
  template: '<App/>'
})
