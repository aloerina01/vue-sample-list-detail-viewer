<template>
  <div></div>
</template>

<script>
export default {
  name: 'StatusBar',
};
</script>

<style lang="scss" scoped>
div {
  background-color: #004ba0;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 16px;
  border-radius: 16px 16px 0 0;
}
@media screen and (max-width: 436px) {
  div {
    border-radius: 0;
  }
}
</style>
