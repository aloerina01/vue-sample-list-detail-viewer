<template>
  <div id="app">
    <status-bar />
    <global-header />
    <router-view></router-view>
  </div>
</template>

<script>
import StatusBar from './components/StatusBar';
import GlobalHeader from './components/GlobalHeader';
export default {
  name: 'App',
  components: { GlobalHeader, StatusBar },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: block;
  position: absolute;
  margin-top: 5vh;
  width: 100%;
  height: 90vh;
  background-color: #fff;
  box-shadow: 1px 1px 10px #e8e8e8;
  border-radius: 16px;
}
@media screen and (max-width: 436px) {
  #app {
    position: relative;
    border-radius: 0;
    box-shadow: none;
    top: 0;
    left: 0;
    transform: none;
    margin-top: 0;
    height: 100vh;
  }
}
</style>
