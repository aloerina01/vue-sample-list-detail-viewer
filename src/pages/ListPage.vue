<template>
  <div>
    <input v-model="filterQuery" />
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        @click.prevent.stop="clickItem(item.id)"
      >
        {{ item.title }}
      </li>
    </ul>
    <button @click.prevent.stop="clickAddButton">Add</button>
  </div>
</template>

<script>
import { fetchListItems, loadNewPage, addListItem } from '../commands';
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
    fetchListItems();
  },
  mounted() {
    loadNewPage('リスト一覧');
  },
  methods: {
    clearQuery() {
      this.filterQuery = '';
    },
    clickAddButton() {
      addListItem('6', '6');
    },
    clickItem(itemId) {
      this.$router.push(`/{itemId}`);
    },
  },
};
</script>

<style lang="scss">
ul {
  list-style: none;
}
</style>
