import Vue from 'vue';
import VueRouter from 'vue-router';
import ListPage from '../pages/ListPage';
import DetailPage from '../pages/DetailPage';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/list', component: ListPage },
    { path: '/detail/:itemId', component: DetailPage, props: true },
    { path: '*', redirect: '/list' },
  ],
});

export { router };
