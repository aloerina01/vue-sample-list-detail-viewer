import { ActionTypes } from '../const/ActionTypes';

export const ItemsStore = {
  state: {
    items: [],
  },
  getters: {
    items: state => state.items,
    findItemById: state => id => state.items.find(each => each.id === id),
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    addItem(state, item) {
      state.items.push(item);
    },
  },
  actions: {
    [ActionTypes.FETCH_LIST_ITEMS]({ commit }, { items }) {
      commit('setItems', items);
    },
    [ActionTypes.ADD_LIST_ITEM]({ commit }, item) {
      commit('addItem', item);
    },
  },
};
