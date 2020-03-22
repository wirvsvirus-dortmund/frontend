import Vue from 'vue';
import Router from 'vue-router';
import ShopRegistration from './components/ShopRegistration.vue';
import Shop from './components/Shop.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/register/shop', component: ShopRegistration },
    { path: '/shops/:id', component: Shop },
  ],
});
