import { computed, defineComponent, onMounted } from 'vue';
import type { SetupContext } from 'vue';
import { swiperProps, SwiperProps } from './swiper-types';
import './swiper.scss';

import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default defineComponent({
  name: 'AuxSwiper',
  props: swiperProps,
  emits: [],
  setup(props: SwiperProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const params = computed(() => ({
      ...{
        modules: [Navigation, Pagination],
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          color: '#fff'
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 2000,
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          color: '#fff'

        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      },
      ...props.params
    }))

    onMounted(() => {
      const swiper = new Swiper('.swiper', params.value);

    })
    const swiperItem = () => props.data.map(item => (<div class="swiper-slide"><img style={{ width: '100%', height: '100%' }} key={item.id} src={item.src} alt="" /></div>))
    return () => {
      return (
        <div class="aux-swiper swiper">
          <div class="swiper-wrapper">
            {swiperItem()}
          </div>
          <div style={params.value.pagination?.color && `--swiper-pagination-color:${params.value.pagination?.color};`} class="swiper-pagination"></div>
          <div style={params.value.navigation?.color && `--swiper-navigation-color:${params.value.navigation?.color};`} class="swiper-button-prev"></div>
          <div style={params.value.navigation?.color && `--swiper-navigation-color:${params.value.navigation?.color};`} class="swiper-button-next"></div>
          <div  class="swiper-scrollbar"></div>
        </div>

      );
    };
  }
});