<template>
  <div v-html="displayItem['content:encoded']"></div>
</template>

<script>
import { ItemsStoreQuery } from '../queries';
import { Commands } from '../commands';

export default {
  name: 'DetailPage',
  props: {
    itemId: String,
  },
  data() {
    return {
      displayItem: null,
    };
  },
  created() {
    this.displayItem = ItemsStoreQuery.findItemById(this.itemId);
  },
  mounted() {
    Commands.updatePageMeta(
      `${
        this.displayItem ? this.displayItem.title : '表示できるものがありません'
      }`
    );
  },
  updated() {
    Commands.updatePageMeta(
      `${
        this.displayItem ? this.displayItem.title : '表示できるものがありません'
      }`
    );
  },
};
</script>
