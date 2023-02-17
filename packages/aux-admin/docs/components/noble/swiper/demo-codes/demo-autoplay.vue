
<template>
  <div class="container">
    <AuxSwiper style="width:60%; height:100%;" :data="data" :getOptions="getOptions" >
    </AuxSwiper>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper as AuxSwiper } from "../../../../../aux-ui/main"
import type { SwiperProps } from "../../../../../aux-ui/swiper/index"
const data = ref<SwiperProps['data']>([
  {
    id: "2",
    title: '我的tilte',
    src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM2_Front%20view.png?wid=656&hei=656"
  },
  {
    id: "1",
    title: '我的tilte',
    src: "https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E8%93%9F%E5%9B%BE%E6%A1%88%E7%B3%BB%E7%BB%93%E8%A1%A3%E9%A2%86%E8%A1%AC%E8%A1%AB--HOS88WXI5744_PM1_Worn%20view.png?wid=656&hei=656"
  },
])
//所有的option配置 为了修改颜色在原有基础上增加了,如果原类型需要断言过多所以这里就不把原有SwiperOptions类型导出了可以通过官方文档查看配置内容并修改
const getOptions:SwiperProps['getOptions']=(opt)=>{
  //修改color是在二次开发中新增加的属性目的是快捷改变功能模块的颜色
  opt.autoplay= {
          delay: 2000,
        }
  opt.navigation.enabled=false//跳转关闭
  // opt.pagination.enabled=false//分页关闭
  return opt
}
    


</script>
<style scoped>
.container {


  perspective: 600px;
  background-color: #813705;
  height: 400px;
  width: 100%;
}
</style>