import { defineComponent, onMounted, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { swiperProps, SwiperProps } from './swiper-types';
import './swiper.scss';

import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default defineComponent({
  name: 'NavSwiper',
  props: swiperProps,
  emits: [],
  setup(props: SwiperProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);


    onMounted(() => {
      const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

    })
    return () => {
      return (
        <div class="navui-swiper swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E9%95%BF%E6%AC%BE%E7%9A%AE%E9%9D%A9%E6%95%99%E7%BB%83%E5%A4%B9%E5%85%8B--HOL79ERDT744_PM1_Worn%20view.png?wid=656&hei=656" alt="" /></div>
            <div class="swiper-slide"> <img src="https://www.louisvuitton.cn/images/is/image/lv/1/PP_VP_L/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB-%E9%95%BF%E6%AC%BE%E7%9A%AE%E9%9D%A9%E6%95%99%E7%BB%83%E5%A4%B9%E5%85%8B--HOL79ERDT744_PM2_Front%20view.png?wid=656&hei=656" alt="" /></div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
        </div>

      );
    };
  }
});