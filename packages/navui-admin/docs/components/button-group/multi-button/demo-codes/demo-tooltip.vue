
<template>

  <div class="container">
    <nav-multi-button-group >
      <nav-multi-button > <i class="iconfont icon-paperplane-fill"></i></nav-multi-button>
      <nav-multi-button> <i class="iconfont icon-link"></i></nav-multi-button>
      <nav-multi-button> <i class="iconfont icon-shopping-cart-fill"></i></nav-multi-button>
      <nav-multi-button> <i class="iconfont icon-delete-fill"></i></nav-multi-button>
    </nav-multi-button-group>

  </div>

</template>
<script lang="ts" setup>
import {  ref } from 'vue';

import {MultiButton as NavMultiButton,MultiButtonGroup as NavMultiButtonGroup} from "../../../../../nav-ui/main"

</script>
<style scoped>
@import url(//at.alicdn.com/t/c/font_3882013_ongjfg9mkdo.css);
.container {
  display: flex;
  perspective: 600px;
}
</style>