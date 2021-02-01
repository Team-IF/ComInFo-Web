<template>
  <info-page/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import InfoPage from './pages/InfoPage.vue'

export default defineComponent({
  name: 'App',
  components: {
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
