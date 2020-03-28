import Vue from 'vue';
import Router from 'vue-router';

import ShopRegistration from './components/ShopRegistration';
import Shop from './components/Shop';
import ShopList from './components/ShopList';
import Landing from './components/Landing.vue';


Vue.use(Router);


const routes = [
  { path: '/',
    component: Landing,
    name: 'Landing',
    props: {
      msg: 'What\'s happenin\' y\'all?!'
    }
   },
  { name: 'ShopRegistration', path: '/register/shop', component: ShopRegistration },
  { name: 'Shop', path: '/shops/:id', component: Shop },
  { name: 'Shops', path: '/shops', component: ShopList },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
