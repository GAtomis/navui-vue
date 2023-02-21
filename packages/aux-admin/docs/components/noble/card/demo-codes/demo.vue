
<template>
  <div class="container">
    <AuxNobleCard class="content">
      <AuxSwiper :get-options="getOptions" >
        <AuxSwiperItem :ishidden="item" class="goods-bg" v-for="item, index of data" :key="item.id" :src="item.src">
        </AuxSwiperItem>
      </AuxSwiper>

      <div class="info" >
        <p>长款夹克</p>
        <p>$ 233</p>
      </div>
    </AuxNobleCard>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { NobleCard as AuxNobleCard, Swiper as AuxSwiper, SwiperItem as AuxSwiperItem } from "../../../../../aux-ui/main"
import type { SwiperProps } from "../../../../../aux-ui/swiper"
const data = ref<SwiperProps['data']>([
  {
    id: "1",
    title: '我的tilte',
    src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM2_Front%20view.png?wid=656&hei=656"
  },
  {
    id: "2",
    title: '我的tilte',
    src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM1_Worn%20view.png?wid=656&hei=656"
  },
])
const getOptions = (swiper) => {
  swiper.speed = 600
  swiper.navigation.color = "#19110b"
  console.log(swiper);
  
  return swiper
}

</script>
<style scoped>
.container {
  /* height: 400px; */
  width: 100%;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* perspective: 600px; */
  /* background-color: #813705; */
}

.container .content {
  flex: auto;
  width: 100%;
}


.container .info p {
  font-size: 100%;
  padding: 0;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  font-style: normal;
  padding-left: 5px;

}
</style>