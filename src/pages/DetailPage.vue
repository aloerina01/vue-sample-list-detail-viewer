<template>
  <div>detail: {{ itemId }}</div>
</template>

<script>
export default {
  name: 'DetailPage',
  props: {
    itemId: String,
  },
};
</script>
