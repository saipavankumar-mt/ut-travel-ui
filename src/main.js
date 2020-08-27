import Vue from 'vue';
import App from './App.vue';
import VueCarousel from 'vue-carousel';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import './assets/app.scss';

Vue.use(VueCarousel);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
