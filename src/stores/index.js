import Vue from 'vue';
import Vuex from 'vuex';
import { ItemsStore } from './ItemsStore';
import { PageMetaStore } from './PageMetaStore';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ItemsStore,
    PageMetaStore,
  },
});
