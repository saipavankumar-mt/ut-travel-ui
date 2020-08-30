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

Vue.use(VueAxios, axios);
Vue.use(VueCarousel);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
