/**
 * Store の Getters へのエイリアスを Module ごとに用意したものです。
 *
 * ここで用意するエイリアスを利用せずとも Store にはアクセス可能ですが、
 * Component から「どの Store の値を読み取っているか」を明確にするためにこのエイリアスを利用することができます
 */

import { store } from '../stores';
import { ItemsStore } from '../stores/ItemsStore';
import { PageMetaStore } from '../stores/PageMetaStore';

function createGettersAlias(storeTemplate = {}) {
  const result = {};
  Object.keys(storeTemplate.getters).forEach(key => {
    result[key] = store.getters[key];
    const descriptor = Object.getOwnPropertyDescriptor(store.getters, key);
    Object.defineProperty(result, key, descriptor);
  });
  return result;
}

export const PageMetaStoreQuery = createGettersAlias(PageMetaStore);
export const ItemsStoreQuery = createGettersAlias(ItemsStore);
