<template>
  <div class="page-wrapper">
    <input v-model="filterQuery" />
    <ul class="feed-list">
      <li
        v-for="item in items"
        :key="item.id"
        class="feed-list-item"
        @click.prevent.stop="clickItem(item.id)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Commands, loadNewPage } from '../commands';
import { ItemsStoreQuery } from '../queries';

export default {
  name: 'ListPage',
  data() {
    return {
      filterQuery: '',
    };
  },
  computed: {
    items() {
      return ItemsStoreQuery.items;
    },
  },
  watch: {
    filterQuery() {},
  },
  created() {
    Commands.fetchNewFeed();
  },
  mounted() {
    loadNewPage('リスト一覧');
  },
  methods: {
    clearQuery() {
      this.filterQuery = '';
    },
    clickItem(itemId) {
      this.$router.push(`/{itemId}`);
    },
  },
};
</script>

<style lang="scss">
.feed-list {
  list-style: none;
  &-item {
    text-align: left;
    padding: 8px 16px;
    border-top: 1px solid #e8e8e8;
    &:first-child {
      border-top: 0px;
    }
  }
}
.page-wrapper {
  overflow-y: scroll;
  height: inherit;
}
</style>
