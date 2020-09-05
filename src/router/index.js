import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PackageDetail from '../components/ui-components/PackageDetail.vue';
import PackageDestinationDetail from '../components/ui-components/PackageDestinationDetail.vue';
import TourPackages from '../views/TourPackages.vue';
import PackageDestinations from '../views/PackageDestinations.vue';

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
    path: '/tour-package/:packageName',
    name: 'detail',
    component: PackageDetail,
    props: true,
  },

  {
    path: '/tour-packages',
    name: 'tour-packages',
    component: TourPackages,
  },

  {
    path: '/destinations',
    name: 'destinations',
    component: PackageDestinations,
  },
  {
    path: '/destination/:destinationName',
    name: 'destination-detail',
    component: PackageDestinationDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
