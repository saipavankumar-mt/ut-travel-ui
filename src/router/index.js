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
import AppRouterView from '../components/ui-components/AppRouterView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // children: [
    //   {
    //     path: 'home',
    //     name: 'home',
    //     component: Home,
    //     meta: { breadCrumb: 'Home' }
    //   },
    // ],
  },

  {
    path: '/tour-packages',
    component: AppRouterView,
    meta: { breadCrumb: 'Tour Packages' },
    children: [
      {
        path: '',
        name: 'tour-packages',
        component: TourPackages,
        props: true,
      },
      {
        path: ':packageName',
        name: 'detail',
        component: PackageDetail,
        props: true,    
      }
    ],
  },

  // {
  //   path: '/tour-packages/:packageName',
  //   name: 'detail',
  //   component: PackageDetail,
  //   props: true,
  // },

  {
    path: '/destinations',
    component: AppRouterView,
    meta: { breadCrumb: 'Tour Destinations' },
    children: [
      {
        path: '',
        name: 'destinations',
        component: TourDestinations,
        props: true,

      },
      {
          path: ':destinationName',
          name: 'destination-detail',
          component: TourDestinationDetail,
          props: true,
      },
    ],
  },

  // {
  //   path: '/destinations/:destinationName',
  //   name: 'destination-detail',
  //   component: TourDestinationDetail,
  //   props: true,
  // },

  {
    path: '/trekking',
    component: AppRouterView,
    meta: { breadCrumb: 'Trekking' },
    children: [
      {
        path: '',
        name: 'trekking',
        component: TourTrekking,
        props: true,
      },
      {
          path: ':trekkingName',
          name: 'trekking-detail',
          component: TourTrekkingDetail,
          props: true,
      },
    ],
  },

  // {
  //   path: '/trekking/:trekkingName',
  //   name: 'trekking-detail',
  //   component: TourTrekkingDetail,
  //   props: true,
  // },

  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs,
    meta: { breadCrumb: 'About Us' },
  },

  {
    path: '/contact-us',
    name: 'Contact-us',
    meta: { breadCrumb: 'Contact Us' },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
