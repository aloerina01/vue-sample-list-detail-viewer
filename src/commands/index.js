import { dispatch } from '../dispatcher';
import { ActionTypes } from '../const/ActionTypes';

export function fetchListItems() {
  // api call
  Promise.resolve().then(() => {
    // dummy data
    const items = [
      { id: '1', title: '1' },
      { id: '2', title: '2' },
      { id: '3', title: '3' },
      { id: '4', title: '4' },
      { id: '5', title: '5' },
    ];
    // update store
    dispatch(ActionTypes.FETCH_LIST_ITEMS, { items: items });
  });
}

export function addListItem(id, title) {
  dispatch(ActionTypes.ADD_LIST_ITEM, { id, title });
}

export function loadNewPage(pageTitle) {
  // update store
  dispatch(ActionTypes.UPDATE_PAGE_META, { title: pageTitle });
}
