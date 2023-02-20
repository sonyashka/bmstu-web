import { RouteRecordRaw } from 'vue-router';
import { UserState } from 'src/services/UserState';

const uss = new UserState();

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        beforeEnter: (to, from, next) => {
          const t = uss.getToken();
          return (!!t && t !== '') ? next() : next('/signin');
        },
      },
    ],

  },
  {
    path: '/signin',
    component: () => import('pages/SignIn.vue'),
    // children: [{ path: '', component: () => import('pages/SignIn.vue') }],
  },
  {
    path: '/signup',
    component: () => import('pages/SignUp.vue'),
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/BooksPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
