<template>
  <div id="app">
    <!-- 
    <img alt="Vue logo" src="./logo.png" />
    <JSX></JSX>
    <h1>Welcome to My Vue.js UI By WebPack!</h1>
    <me-loading loading-text="页面加载中......"></me-loading> 
  -->

    <div id="nav"><router-link to="/">Home</router-link> | <router-link to="/jsx">JSX</router-link> | <router-link to="/test">Loading组件</router-link> |</div>
    <router-view></router-view>
  </div>
</template>
<script>
// import JSX from './JSX.vue'
export default {
  name: 'App',
  components: {
    // JSX,
  },
  data() {
    return {}
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
.router-link-exact-active {
  color: #42b983;
}
</style>
