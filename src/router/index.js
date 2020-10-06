import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PackageDetail from '../views/Package/PackageDetail.vue';
import TourDestinationDetail from '../views/Destination/TourDestinationDetail.vue';
import TourTrekkingDetail from '../views/Trekking/TourTrekkingDetail.vue';
import TourPackages from '../views/Package/TourPackages.vue';
import TourDestinations from '../views/Destination/TourDestinations.vue';
import TourTrekking from '../views/Trekking/TourTrekking.vue';
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
    props: true,
  },

  {
    path: '/trekking',
    name: 'trekking',
    component: TourTrekking,
    props: true,
  },
  {
    path: '/destination/:destinationId/:destinationName',
    name: 'destination-detail',
    component: TourDestinationDetail,
    props: true,
  },
  {
    path: '/trekking/:trekkingId/:trekkingName',
    name: 'trekking-detail',
    component: TourTrekkingDetail,
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
