<template>
  <div class="loadingBg">
    <div class="loadingText">Loading...</div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'loadingPage'
})
</script>

<style>
  .loadingBg {
    background: black;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0%;
    /*display: none;*/
    visibility: hidden;

    animation-duration: 3s;
    animation-name: loadingAnimation;
    z-index: 1;
  }

  @keyframes loadingAnimation {
    0% {
      opacity: 100%;
      /*display: initial;*/
      visibility: initial;
    }

    90% {
      opacity: 100%;
      /*display: initial;*/
      visibility: initial;
    }

    100% {
      opacity: 0%;
      visibility: hidden;
    }
  }

  .loadingText {
    text-align: center;
    color: white;
    font-size: 50px;
    font-weight: bold;
  }
</style>
