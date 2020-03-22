import Vue from 'vue';
import Router from 'vue-router';
import ShopRegistration from './components/ShopRegistration.vue';
import Home from './components/Landing.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    props: {
      msg: 'Wahts happeing yo?!'
    }
   },
  {
    path: '/register/shop',
    name: 'ShopRegistration',
    component: ShopRegistration,
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});