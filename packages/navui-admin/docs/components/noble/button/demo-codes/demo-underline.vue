
<template>
  <div class="container">
    <nav-noble-button underline >
      <span>加入购物</span>
    </nav-noble-button>
    <nav-noble-button  round underline>
      <span>即可订购</span>
    </nav-noble-button>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

import {  NobleButton as NavNobleButton } from "../../../../../nav-ui/main"


const words = ref("So do i")
</script>
<style scoped>
.container {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 600px;
  background-color: #813705;
}
</style>