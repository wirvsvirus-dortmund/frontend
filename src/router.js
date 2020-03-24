import Vue from 'vue';
import Router from 'vue-router';

import Login from './components/Login.vue';
import InternalLanding from './components/InternalLanding.vue';
import InternalManagement from './components/InternalManagement.vue';
import InternalRegistration from './components/InternalRegistration.vue';

Vue.use(Router);

const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
        path: '/internal/landing',
        name: 'InternalLanding',
        component: InternalLanding
    },
    {
      path: '/internal/registration',
      name: 'InternalRegistration',
      component: InternalRegistration,
    },
    {
        path: '/internal/management',
        name: 'InternalManagement',
        component: InternalManagement
    }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
});