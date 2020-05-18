import { store } from '../stores';

// FluxのようにdispatchですべてのStoreに通知するには
// namespaced: false にしなければならない
export const dispatch = (actionType, payload) => {
  store.dispatch(actionType, payload);
};
