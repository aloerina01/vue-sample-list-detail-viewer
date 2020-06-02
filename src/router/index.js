import Vue from 'vue';
import VueRouter from 'vue-router';
import ListPage from '../pages/ListPage';
import DetailPage from '../pages/DetailPage';
import { ItemsStoreQuery } from '../queries';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/list', component: ListPage },
    { path: '/detail/:itemId', component: DetailPage, props: true },
    { path: '*', redirect: '/list' },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/list' && ItemsStoreQuery.items.length === 0) {
    return next('/list');
  }
  next();
});

export { router };
