import { dispatch } from '../dispatcher';
import { ActionTypes } from '../const/ActionTypes';

import { fetchNewFeed } from './fetchNewFeed';
import { updatePageMeta } from './updatePageMeta';

export const Commands = {
  fetchNewFeed,
  updatePageMeta,
};

export function addListItem(id, title) {
  dispatch(ActionTypes.ADD_LIST_ITEM, { id, title });
}
