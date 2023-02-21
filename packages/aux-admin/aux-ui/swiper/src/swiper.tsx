import { computed, defineComponent, onMounted, ref } from 'vue';
import { swiperProps, SwiperProps } from './swiper-types';
import './swiper.scss';
import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import { cloneDeep } from "lodash-es"
import SwiperItem from './swiper-item'
type SwiperEvent = (swiper: Swiper) => void
export default defineComponent({
  name: 'AuxSwiper',
  props: swiperProps,
  emits: ['next', 'prev', 'beforeSlide', 'slide'],
  setup(props: SwiperProps, { attrs, slots, emit }) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const scrollbarRef = ref(),
      nextRef = ref(),
      prevRef = ref(),
      paginationRef = ref(),
      swiperRef = ref(),
      wrapRef = ref<HTMLElement>()
    const params = computed(() => {
      const params = cloneDeep({
        modules: [Navigation, Pagination, Autoplay, Scrollbar],
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
          hide: true,
          enabled: false
        }
      })

      return props.getOptions?.(params)
    })
    const navigationNext: SwiperEvent = (s) => {
      emit('next', s, s.realIndex, wrapRef?.value?.children[s.realIndex].attributes)
    }
    const navigationPrev: SwiperEvent = (s) => {
      emit('prev', s, s.realIndex)
    }
    const beforeSlideChangeStart: SwiperEvent = (s) => {
      emit('beforeSlide', s, s.realIndex)
    }
    const slideChange: SwiperEvent = (s) => {
      emit('slide', s, s.realIndex, wrapRef?.value?.children[s.realIndex].attributes)
    }
    onMounted(() => {
      const swiper = new Swiper(swiperRef.value, params.value);
      swiper.on("navigationNext", navigationNext)
      swiper.on("navigationPrev", navigationPrev)
      swiper.on("beforeSlideChangeStart", beforeSlideChangeStart)
      swiper.on("slideChange", slideChange)
    })
    const getSwiperItemList = () => props.data.map(item => (<SwiperItem src={item.src}></SwiperItem>))
    const PaginationEle = () => (<div ref={paginationRef} style={params.value.pagination?.color && `--swiper-pagination-color:${params.value.pagination?.color};`} class="swiper-pagination"></div>)
    const NavigationNext = () => <div ref={nextRef} style={params.value.navigation?.color && `--swiper-navigation-color:${params.value.navigation?.color};`} class="swiper-button-next navigation"></div>
    const NavigationPrev = () => <div ref={prevRef} style={params.value.navigation?.color && `--swiper-navigation-color:${params.value.navigation?.color};`} class="swiper-button-prev navigation" ></div>
    const ScrollbarEle = () => <div ref={scrollbarRef} class="swiper-scrollbar"></div>
    return () => {
      return (
        <div class="aux-swiper swiper" ref={swiperRef}>
          <div class="swiper-wrapper" ref={wrapRef}>
            {slots.default?.() ?? getSwiperItemList()}
          </div>
          <PaginationEle></PaginationEle>
          <NavigationPrev></NavigationPrev>
          <NavigationNext></NavigationNext>
          <ScrollbarEle></ScrollbarEle>
        </div>

      );
    };
  }
});