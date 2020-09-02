import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TravelDetail from '../components/ui-components/TravelDetail.vue';
import TourPackages from '../views/TourPackages.vue';

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
    path: '/tour-packages',
    name: 'tour-packages',
    component: TourPackages,
  },
  {
    path: '/tour-package/:packageName',
    name: 'detail',
    component: TravelDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
