
<template>
  <div class="container">
    <AuxSwiper style="width:60%; height:100%;" :data="data" key="1">
    </AuxSwiper>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


import { SwiperProps } from '@library/aux-admin/build/types/swiper';
const data = ref<SwiperProps['data']>([
  {
    id: "2",
    title: '我的tilte',
    src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM2_Front%20view.png?wid=656&hei=656"
  },
  {
    id: "2",
    title: '我的tilte',
    src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM1_Worn%20view.png?wid=656&hei=656"
  },
])

</script>
<style scoped>
.container {
  perspective: 600px;
  background-color: #813705;
  height: 400px;
  width: 100%;
}
</style>