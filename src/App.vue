<template>

  <loading-page/>

  <info-page/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import InfoPage from './pages/InfoPage.vue'
import LoadingPage from "./components/loadingPage.vue";

export default defineComponent({
  name: 'App',
  components: {
    LoadingPage,
    InfoPage
  }
})
</script>

<style>
/*noinspection CssUnusedSymbol*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
