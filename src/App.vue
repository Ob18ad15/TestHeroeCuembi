<template>
  <div class="container">
    <headerComponent/>
    <HelloWorld/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import headerComponent from './components/headerComponent.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    headerComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
