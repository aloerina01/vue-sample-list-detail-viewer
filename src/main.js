import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App";
import { router } from "./router";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
