import { dispatch } from '../dispatcher';
import { ActionTypes } from '../const/ActionTypes';

import { fetchNewFeed } from './fetchNewFeed';

export const Commands = {
  fetchNewFeed,
};

export function addListItem(id, title) {
  dispatch(ActionTypes.ADD_LIST_ITEM, { id, title });
}

export function loadNewPage(pageTitle) {
  // update store
  dispatch(ActionTypes.UPDATE_PAGE_META, { title: pageTitle });
}
