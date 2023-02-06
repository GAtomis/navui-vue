
<template>

  <div class="container">
    <nav-gfg-button>Add</nav-gfg-button>
    <nav-gfg-button type="danger">Delete</nav-gfg-button>
    <nav-gfg-button :type="type">
      <template #icon>
        <i class="iconfont">&#xe64a;</i>
      </template>
      {{ words }}
    </nav-gfg-button>
  </div>

</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import type {GfgButtonProps} from "../../../../build/types/gfg-button"
import {SearchOutlined} from '@ant-design/icons-vue'
  const type= ref<GfgButtonProps['type']>("success")
  const words= ref("icon")


</script>
<style scoped>

/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: 'iconfont';  /* Project id 3882013 */
  src: url('//at.alicdn.com/t/c/font_3882013_gfdvuzmdxm4.woff2?t=1675665276093') format('woff2'),
       url('//at.alicdn.com/t/c/font_3882013_gfdvuzmdxm4.woff?t=1675665276093') format('woff'),
       url('//at.alicdn.com/t/c/font_3882013_gfdvuzmdxm4.ttf?t=1675665276093') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  
  }
.container {
  display: flex;
  perspective: 600px;
}
</style>