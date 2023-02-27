
<template>
  <div class="container">
    <aux-noble-button round >
      <span>加入购物</span>
    </aux-noble-button>
    <aux-noble-button fill round>
      <span>筛选</span>
      <i class="iconfont icon-control1"></i>
    </aux-noble-button>
    <aux-noble-button  circle>
      <i class="iconfont icon-shopping-cart-fill"></i>
    </aux-noble-button>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

import {  NobleButton as AuxNobleButton } from "../../../../../aux-ui/main"


const words = ref("So do i")
</script>
<style scoped>

@import url(//at.alicdn.com/t/c/font_3882013_q5u06iila8.css);
.icon-control1{
  font-size: 20px;
  margin-left: 5px;
}
.container {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 600px;
  background-color: #813705;
}
</style>