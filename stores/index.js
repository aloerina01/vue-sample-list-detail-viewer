import Vuex from "vuex";
import { ItemsStore } from "./ItemsStore";

const store = new Vuex({
  modules: {
    Items: ItemsStore
  }
});

const storeModules = store.modules;

export function getItemsStore() {
  return storeModules.Items;
}
