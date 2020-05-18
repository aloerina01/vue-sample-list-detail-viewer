<template>
  <header>
    <div>pageTitle: {{ pageTitle }}</div>
  </header>
</template>

<script>
import { PageMetaStoreQuery } from '../queries';

export default {
  name: 'GlobalHeader',
  mounted() {},
  computed: {
    pageTitle() {
      return PageMetaStoreQuery.pageTitle;
    },
  },
};
</script>