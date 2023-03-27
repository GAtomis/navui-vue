
<template>
  <div class="container">
    <aux-gfg-button :disabled="true">
      <template #icon>
        <i class="iconfont icon-link"></i>
      </template>
      Click link
    </aux-gfg-button>
    <aux-gfg-button :type="type" :disabled="true">
      <template #icon>
        <i class="iconfont   icon-shopping-cart-fill"></i>
      </template>
      Add Cart
    </aux-gfg-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { GfgButtonProps } from "../../../../../build/types/gfg-button"
import { GfgButton as AuxGfgButton } from "../../../../../aux-ui/main"
const type = ref<GfgButtonProps['type']>("success")
const words = ref("Icon")
</script>
<style scoped>
@import url(https://at.alicdn.com/t/c/font_3882013_ongjfg9mkdo.css?spm=a313x.7781069.1998910419.52&file=font_3882013_ongjfg9mkdo.css);
.container {
  display: flex;
  perspective: 600px;
}

.iconfont {
  font-size: 30px;
}
</style>