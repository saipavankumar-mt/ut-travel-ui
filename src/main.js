import Vue from 'vue';
import App from './App.vue';
import VueCarousel from 'vue-carousel';
import Buefy from 'buefy';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';
import './assets/app.scss';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './components/ui-components/_globals';
import mobileCheck from './plugins/mobile-check';
Vue.use(mobileCheck);
Vue.use(VueAxios, axios);
Vue.use(VueCarousel);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
