
<template>
  <div class="container">
    <aux-noble-button >
      <span>加入购物</span>
    </aux-noble-button>
    <aux-noble-button  disabled>
      <span>禁止</span>
    </aux-noble-button>
    <aux-noble-button type="primary"   fill>
      <span>主要按钮</span>
    </aux-noble-button>
    <aux-noble-button type="success"   fill>
      <span>登陆微信</span>
    </aux-noble-button>
    <aux-noble-button type="confirm"   fill>
      <span>确认购买</span>
    </aux-noble-button>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

import {  NobleButton as AuxNobleButton } from "../../../../../aux-ui/main"



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