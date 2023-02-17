



<template>
  <div class="container">
    <aux-multi-button-group tooltip active-color="#c522ea" hover-color="#e2b5ec">
      <aux-multi-button>
        <i class="iconfont icon-paperplane-fill"></i>
      </aux-multi-button>
      <aux-multi-button tip="link">
        <i class="iconfont icon-link"></i>
      </aux-multi-button>
      <aux-multi-button tip="cart">
        <i class="iconfont icon-shopping-cart-fill"></i>
      </aux-multi-button>
      <aux-multi-button>
        <i class="iconfont icon-delete-fill"></i>
        <template #tooltip>
          delete
        </template>
      </aux-multi-button>
    </aux-multi-button-group>
  </div>
</template>
<script lang="ts" setup>
import { MultiButton as AuxMultiButton, MultiButtonGroup as AuxMultiButtonGroup } from "../../../../../aux-ui/main"
</script>
<style scoped>
@import url(//at.alicdn.com/t/c/font_3882013_ongjfg9mkdo.css);

.container {
  min-height: 100px;
  display: flex;
  perspective: 600px;
  align-items: flex-end;
}
</style>