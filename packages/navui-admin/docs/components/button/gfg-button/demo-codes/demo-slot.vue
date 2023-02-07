
<template>

    <div class="container">
        <nav-gfg-button  :disabled="true">
        <template #icon>
          <i class="iconfont">&#xe772;</i>
        </template>
        Click link
      </nav-gfg-button>
      <nav-gfg-button :type="type" :disabled="true">
        <template #icon>
          <i class="iconfont">&#xe865;</i>
        </template>
        Add Cart
      </nav-gfg-button>
  
    </div>
  
  </template>
  <script lang="ts" setup>
  import { defineComponent, ref } from 'vue';
  import type {GfgButtonProps} from "../../../../../build/types/gfg-button"
  
  import {GfgButton as NavGfgButton} from "../../../../../nav-ui/main"
    const type= ref<GfgButtonProps['type']>("success")
    const words= ref("Icon")
  </script>
  <style scoped>
  
  @font-face {
  font-family: 'iconfont';  /* Project id 3882013 */
  src: url('//at.alicdn.com/t/c/font_3882013_psx0qoy1my.woff2?t=1675698174896') format('woff2'),
       url('//at.alicdn.com/t/c/font_3882013_psx0qoy1my.woff?t=1675698174896') format('woff'),
       url('//at.alicdn.com/t/c/font_3882013_psx0qoy1my.ttf?t=1675698174896') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-link:before {
  content: "\e772";
}

.icon-layergroup-fill:before {
  content: "\e7b5";
}

.icon-unlock-fill:before {
  content: "\e7b8";
}

.icon-phone-fill:before {
  content: "\e7ca";
}

.icon-delete:before {
  content: "\e810";
}

.icon-shopping-cart-fill:before {
  content: "\e865";
}

  .container {
    display: flex;
    perspective: 600px;
  }
  </style>