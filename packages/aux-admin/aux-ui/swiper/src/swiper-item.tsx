import { computed, defineComponent, } from 'vue';
import { swiperItemProps, SwiperItemProps } from './swiper-types';
import './swiper.scss';
import {useNamespace} from '../../shared/hooks/use-namespace'
export default defineComponent({
  name: 'AuxSwiperItem',
  props: swiperItemProps,
  emits: [],
  setup(props, ctx) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const ns =useNamespace('swiper__item')

    const classes= computed(()=>({
      [ns.m('gradient')]:!true,
      [ns.b()]:true,
      [ns.m('fitContain')]:true,
      ['swiper-slide']:true



    }))
    return () => {
      return (
        <div  class={classes.value} >
          {ctx.slots.default?.({
            text:'AuxSwiperItem'
          })??<img style={ {width: '100%', height: '100%' }} key="1" src={props.src} alt="" />}  
       
        </div>

      );
    };
  }
});