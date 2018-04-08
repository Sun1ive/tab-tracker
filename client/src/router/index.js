import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/components/Home'),
    },
    {
      path: '/register',
      component: () => import('@/components/Register'),
    },
    {
      path: '/login',
      component: () => import('@/components/Login'),
    },
    {
      path: '/logout',
      component: () => import('@/components/Logout'),
    },
  ],
});
