import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PackageDetail from '../components/ui-components/PackageDetail.vue';
import TourDestinationDetail from '../components/ui-components/TourDestinationDetail.vue';
import TourPackages from '../views/Package/TourPackages.vue';
import TourDestinations from '../views/Destination/TourDestinations.vue';
import AboutUs from '../views/AboutUs.vue';

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
    path: '/tour-package/:packageId/:packageName',
    name: 'detail',
    component: PackageDetail,
    props: true,
  },

  {
    path: '/tour-packages',
    name: 'tour-packages',
    component: TourPackages,
    props: true,
  },

  {
    path: '/destinations',
    name: 'destinations',
    component: TourDestinations,
  },
  {
    path: '/destination/:destinationId/:destinationName',
    name: 'destination-detail',
    component: TourDestinationDetail,
    props: true,
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
