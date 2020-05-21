import { v4 as createUuid } from 'uuid';
import { ActionTypes } from '../const/ActionTypes';

// item object
// content: string
// content:encoded: string
// contentSnippet: string
// date:string ("2017-03-08T11:37:34Z")
// dc:date: string ("2017-03-08T11:37:34Z")
// isoDate: string ("2017-03-08T11:37:34.000Z"0
// link: string
// title: strng

export const ItemsStore = {
  state: {
    title: '',
    description: '',
    items: [],
  },
  getters: {
    items: state => state.items,
    findItemById: state => id => state.items.find(each => each.id === id),
  },
  mutations: {
    setFeed(state, feed) {
      state.title = feed.title;
      state.description = feed.description;
      state.items = feed.items;
    },
    addItem(state, item) {
      state.items.push(item);
    },
  },
  actions: {
    [ActionTypes.FETCH_NEW_FEED]({ commit }, feed) {
      feed.items = feed.items.map(item => {
        item.id = createUuid();
        return item;
      });
      commit('setFeed', feed);
    },
    [ActionTypes.ADD_LIST_ITEM]({ commit }, item) {
      commit('addItem', item);
    },
  },
};
