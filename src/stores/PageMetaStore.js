import { ActionTypes } from '../const/ActionTypes';

export const PageMetaStore = {
  state: {
    title: '',
    description: '',
    ogp: {},
  },
  getters: {
    pageTitle: state => state.title,
  },
  mutations: {
    setPageTitle(state, title) {
      state.title = title;
    },
  },
  actions: {
    [ActionTypes.UPDATE_PAGE_META]({ commit }, { title }) {
      commit('setPageTitle', title);
    },
  },
};
