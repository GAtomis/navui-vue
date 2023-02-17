<!--
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-17 10:04:50
 * @Description: 头部注释
-->
<script setup lang="ts">

import {ref} from 'vue'

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

<template>
  <div>


    <nav-swiper ></nav-swiper>
  </div>   


</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:800");

</style>
