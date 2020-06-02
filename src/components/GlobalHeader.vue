<template>
  <header>
    <div class="title-label">{{ pageTitle }}</div>
  </header>
</template>

<script>
import { PageMetaStoreQuery } from '../queries';

export default {
  name: 'GlobalHeader',
  computed: {
    pageTitle() {
      return PageMetaStoreQuery.pageTitle;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  padding: 16px 28px;
  background-color: #1976d2;
  color: #fff;
  font-weight: 700;
  .title-label {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
