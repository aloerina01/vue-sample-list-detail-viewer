<template>
  <div class="page-wrapper">
    <div class="filter-query">
      <i class="filter-query-icon"></i>
      <input v-model="filterQuery" class="filter-query-input" />
    </div>
    <ul v-show="displayedItems.length > 0" class="feed-list">
      <router-link
        v-for="item in displayedItems"
        :key="item.id"
        class="feed-list-item"
        :to="`detail/${item.id}`"
      >{{ item.title }}</router-link>
    </ul>
    <div
      v-show="filterQuery.length > 0 && displayedItems.length === 0"
      class="no-feed-list"
    >ブックマークが見つかりませんでした</div>
  </div>
</template>

<script>
import { Commands } from '../commands';
import { ItemsStoreQuery } from '../queries';

export default {
  name: 'ListPage',
  data() {
    return {
      filterQuery: '',
    };
  },
  computed: {
    allItems() {
      return ItemsStoreQuery.items;
    },
    filteredItems() {
      return ItemsStoreQuery.items.filter(each => {
        return each.title.indexOf(this.filterQuery) > -1;
      });
    },
    displayedItems() {
      return this.filterQuery.length > 0 ? this.filteredItems : this.allItems;
    },
  },
  created() {
    Commands.fetchNewFeed();
  },
  mounted() {
    Commands.updatePageMeta('ブックマーク一覧');
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
.filter-query {
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  &-icon {
    background-image: url('/assets/search.png');
    background-size: contain;
    width: 16px;
    height: 16px;
    display: block;
    opacity: 0.3;
    margin: 16px 0 16px 16px;
  }
  &-input {
    margin: 8px;
    line-height: 2;
    outline: 0;
    display: block;
    margin: 8px 16px 8px 8px;
    flex-grow: 1;
    &:focus {
      border: none;
    }
  }
}
.feed-list {
  list-style: none;
  &-item {
    display: block;
    text-align: left;
    text-decoration: none;
    color: #444;
    padding: 8px 16px;
    border-bottom: 1px solid #e8e8e8;
  }
}
.no-feed-list {
  padding-top: 40%;
  font-weight: 700;
  color: #aaa;
}
.page-wrapper {
  overflow-y: scroll;
  height: calc(100% - 72px); // statusbar 16px, header 56px
}
</style>
