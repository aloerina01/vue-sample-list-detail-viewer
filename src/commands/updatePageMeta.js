import { ActionTypes } from '../const/ActionTypes';
import { dispatch } from '../dispatcher';

export function updatePageMeta(pageTitle) {
  dispatch(ActionTypes.UPDATE_PAGE_META, { title: pageTitle });
}
