
<template>
  <div class="container">
    <NavSwiper style="width:60%; height:100%;">
    </NavSwiper>
  </div>
</template>
<script lang="ts" setup>
import {  ref } from 'vue';
import { Swiper as NavSwiper} from "../../../../../nav-ui/main"

</script>
<style scoped>
.container {


  perspective: 600px;
  background-color: #813705;
  height: 400px;
  width: 100%;
}
</style>