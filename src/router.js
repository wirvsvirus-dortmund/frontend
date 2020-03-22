import Vue from 'vue';
import Router from 'vue-router';
import ShopRegistration from './components/ShopRegistration';
import Shop from './components/Shop'
import ShopList from './components/ShopList'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: ShopList },
    { path: '/register/shop', component: ShopRegistration },
    { path: '/shops/:id', component: Shop },
  ],
});
