
<template>
  <div class="container">
    <aux-noble-button underline >
      <span>加入购物</span>
    </aux-noble-button>
    <aux-noble-button  round underline>
      <span>即可订购</span>
    </aux-noble-button>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

import {  NobleButton as AuxNobleButton } from "../../../../../aux-ui/main"


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