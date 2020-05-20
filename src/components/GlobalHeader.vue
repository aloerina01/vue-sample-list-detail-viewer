<template>
  <header>
    <div>pageTitle: {{ pageTitle }}</div>
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
