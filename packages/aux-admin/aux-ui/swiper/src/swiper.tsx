import { computed, defineComponent, onMounted, ref } from 'vue';
import type { SetupContext } from 'vue';
import { swiperProps, SwiperProps } from './swiper-types';
import './swiper.scss';
import type { SwiperOptions } from 'swiper';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import { cloneDeep } from "lodash-es"
// import Swiper and modules styles
import "swiper/swiper-bundle.min.css";



export default defineComponent({
  name: 'AuxSwiper',
  props: swiperProps,
  emits: [],
  setup(props: SwiperProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);

    const scrollbarRef=ref(),
    nextRef=ref(),
    prevRef=ref(),
    paginationRef=ref(),
    swiperRef=ref()

    const params = computed(() => {
     const params= cloneDeep({
        modules: [Navigation, Pagination, Autoplay],
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // If we need pagination
        pagination: {
          el: paginationRef.value,
          color: '#fff',
        },
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,//修改swiper的父元素时，自动初始化swiper
        autoplay: {
          enabled: false
        },
  
        // Navigation arrows
        navigation: {
          nextEl: nextRef.value,
          prevEl: prevRef.value,
          color: '#fff',
        },
  
        // And if we need scrollbar
        scrollbar: {
          el: scrollbarRef.value,
        }
      })
      
      return props.getOptions?.(params)
    })
    onMounted(() => {
      const swiper = new Swiper(swiperRef.value, params.value);

    })
    const swiperItem = () => props.data.map(item => (<div class="swiper-slide"><img style={{ width: '100%', height: '100%' }} key={item.id} src={item.src} alt="" /></div>))
    return () => {
      return (
        <div class="aux-swiper swiper" ref={swiperRef}>
          <div class="swiper-wrapper">
            {swiperItem()}
          </div>
          <div ref={paginationRef} style={params.value.pagination?.color && `--swiper-pagination-color:${params.value.pagination?.color};`} class="swiper-pagination"></div>
          <div ref={prevRef}style={params.value.navigation?.color && `--swiper-navigation-color:${params.value.navigation?.color};`} class="swiper-button-prev"></div>
          <div ref={nextRef} style={params.value.navigation?.color && `--swiper-navigation-color:${params.value.navigation?.color};`} class="swiper-button-next"></div>
          <div ref={scrollbarRef} class="swiper-scrollbar"></div>
        </div>

      );
    };
  }
});