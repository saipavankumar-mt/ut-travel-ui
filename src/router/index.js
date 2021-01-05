import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AppRouterView from '../components/ui-components/AppRouterView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  {
    path: '/tour-packages',
    component: AppRouterView,
    meta: { breadCrumb: 'Tour Packages' },
    children: [
      {
        path: '',
        name: 'tour-packages',
        component: () => import('../views/Package/TourPackages.vue'),
        props: true,
      },
      {
        path: ':packageName',
        name: 'detail',
        component: () => import('../views/Package/PackageDetail.vue'),
        props: true,
      }
    ],
  },

  {
    path: '/destinations',
    component: AppRouterView,
    meta: { breadCrumb: 'Tour Destinations' },
    children: [
      {
        path: '',
        name: 'destinations',
        component: () => import('../views/Destination/TourDestinations.vue'),
        props: true,

      },
      {
        path: ':destinationName',
        name: 'destination-detail',
        component: () => import('../views/Destination/TourDestinationDetail.vue'),
        props: true,
      },
    ],
  },

  {
    path: '/trekking',
    component: AppRouterView,
    meta: { breadCrumb: 'Trekking' },
    children: [
      {
        path: '',
        name: 'trekking',
        component: () => import('../views/Trekking/TourTrekking.vue'),
        props: true,
      },
      {
        path: ':trekkingName',
        name: 'trekking-detail',
        component: () => import('../views/Trekking/TourTrekkingDetail.vue'),
        props: true,
      },
    ],
  },

  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../views/AboutUs.vue'),
    meta: { breadCrumb: 'About Us' },
  },

  {
    path: '/contact-us',
    name: 'Contact-us',
    component: () => import('../views/ContactUs.vue'),
    meta: { breadCrumb: 'Contact Us' },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
