
<template>
  <div class="container">
    <AuxNobleCard class="content" v-for="good,goodNumber of goods" :key="goodNumber">
      <template #media>
        <AuxSwiper @slide="(...attr) => slideCb(good,...attr)" :get-options="getOptions" >
          <AuxSwiperItem  :src="item.src" :key="item.id" class="good-bg"  v-for="item,index of good.list">
          </AuxSwiperItem>
        </AuxSwiper>
      </template>
      <template #info>
        <div class="info" :class="{ hidden: good.hidden }">
          <p>长款夹克</p>
          <p>$ 233</p>
        </div>
      </template>
    </AuxNobleCard>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, reactive } from 'vue';
import { NobleCard as AuxNobleCard, Swiper as AuxSwiper, SwiperItem as AuxSwiperItem } from "../../../../../aux-ui/main"
import type { SwiperProps } from "../../../../../aux-ui/swiper"


type Goods = { hidden: Boolean, list: SwiperProps['data'] }

const goods = reactive<Goods[]>([
  {
    hidden: false,
    list: [{
      id: "1",
      title: '我的tilte',
      src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM2_Front%20view.png?wid=656&hei=656"
    },
    {
      id: "2",
      title: '我的tilte',
      src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM1_Worn%20view.png?wid=656&hei=656",
      hidden:true
    },]
  },
  {
    hidden: false,
    list: [{
      id: "1",
      title: '我的tilte',
      src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM2_Front%20view.png?wid=656&hei=656",

    },
    {
      id: "2",
      title: '我的tilte',
      src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM1_Worn%20view.png?wid=656&hei=656",
      hidden:true
    },]
  },
])
const getOptions = (swiper) => {
  swiper.speed = 600
  swiper.navigation.color = "#19110b"
  swiper.pagination.enabled=false
  return swiper
}
const slideCb = (...params) => {
const [good,swiper,index,attr]=params
  // console.log(good.list[]);
  good.hidden=good.list[index]?.hidden
  


}

</script>
<style scoped>
.container {
  /* height: 400px; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* align-items: center; */
  /* perspective: 600px; */
  /* background-color: #813705; */
}

.container .content {
  flex: 0 1 auto;
  width: 50%;
}

.container .hidden {
  opacity: 0;
}

.container .info {
  transition: 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  z-index: 2;
  padding: 5px 8px;
}

.good-bg  {

  background: url(https://www.louisvuitton.cn/static_lvfront/product-card-gradients/gradient_default.svg) 0 0/cover no-repeat;
}


.container .info p {
  font-size: 50%;
  padding: 0;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  font-style: normal;
  padding-left: 5px;


}
</style>