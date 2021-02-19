<template>
  <div class="one box-shadow-extra-large">
    <div class="info-title text-gray-dark">{{ name }}</div>
    <div class="value text-gray-dark">{{ content }}</div>
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
  border-radius: 20px;
  /* background: #ECEFF4; */
  background: #ffffff;
  width: 400px;
  height: 200px;
  text-align: center;
  z-index: 3;
}

.info-title {
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
