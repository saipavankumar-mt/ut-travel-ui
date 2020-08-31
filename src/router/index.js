import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ContactUs from '../views/ContactUs.vue';
import TravelDetail from '../components/ui-components/TravelDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
    ],
  },

  {
    path: '/detail/:packageId',
    name: 'detail',
    component: TravelDetail,
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: ContactUs,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
