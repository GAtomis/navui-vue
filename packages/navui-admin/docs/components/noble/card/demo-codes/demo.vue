
<template>
  <div class="container">
    <nav-noble-card></nav-noble-card>
  </div>
</template>
<script lang="ts" setup>
import {  ref } from 'vue';
import { NobleCard as NavNobleCard} from "../../../../../nav-ui/main"


</script>
<style scoped>
.container {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 600px;
  /* background-color: #813705; */
}
</style>