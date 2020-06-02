<template>
  <div>{{ displayItem }}</div>
</template>

<script>
import { ItemsStoreQuery } from '../queries';
import { Commands } from '../commands';

export default {
  name: 'DetailPage',
  props: {
    itemId: String,
  },
  computed: {
    displayItem() {
      return ItemsStoreQuery.findItemById(this.itemId);
    },
  },
  mounted() {
    Commands.updatePageMeta(`Detail - ${this.displayItem.title}`);
  },
  updated() {
    Commands.updatePageMeta(`Detail - ${this.displayItem.title}`);
  },
};
</script>
