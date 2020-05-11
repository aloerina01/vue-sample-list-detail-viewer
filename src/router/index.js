import VueRouter from "vue-router";
import ListPage from "../pages/ListPage";
import DetailPage from "../pages/DetailPage";

export const router = new VueRouter({
  routes: [
    { path: "/list", component: ListPage },
    { path: "/detail/:itemId", component: DetailPage },
    { path: "*", redirect: "/list" }
  ]
});
