
<template>

  <div class="container">
    <nav-multi-button-group tooltip active-color="#c522ea" hover-color="#e2b5ec">
      <nav-multi-button> <i class="iconfont icon-paperplane-fill"></i></nav-multi-button>
      <nav-multi-button tip="link"> <i class="iconfont icon-link"></i></nav-multi-button>
      <nav-multi-button tip="cart"> <i class="iconfont icon-shopping-cart-fill"></i></nav-multi-button>
      <nav-multi-button> <i class="iconfont icon-delete-fill"></i>
        <template #tooltip>
          delete
        </template>
      </nav-multi-button>
    </nav-multi-button-group>
  </div>
</template>
<script lang="ts" setup>
import { MultiButton as NavMultiButton, MultiButtonGroup as NavMultiButtonGroup } from "../../../../../nav-ui/main"
</script>
<style scoped>
@import url(//at.alicdn.com/t/c/font_3882013_ongjfg9mkdo.css);
.container {
  min-height: 100px;
  display: flex;
  perspective: 600px;
  align-items: flex-end ;
}
</style>