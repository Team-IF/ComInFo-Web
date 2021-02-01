<template>
  <div class="one hoverable z-depth-1-half">
    <div class="info">{{ name }}</div>
    <div class="value">{{ content }}</div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'InfoCard',
  props: {
    name: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
})
</script>

<style>
.one {
  margin: 20px;
  /* border-radius: 20px; */
  /* background: #ECEFF4; */
  background: white;
  width: 400px;
  height: 200px;
  text-align: center;
}

.info {
  font-size: 20px;
  font-weight: bolder;
  margin: 20px;
}

.value {
  font-size: 25px;
  font-weight: bold;
  margin: 20px;
}
</style>
