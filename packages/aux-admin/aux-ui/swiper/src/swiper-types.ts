import type { PropType, ExtractPropTypes } from 'vue';
import type {} from 'swiper'

type Data ={
  src:string
  title:string
  id:string
};
export const swiperProps = {
  data: {
    type: Array as PropType<Data[]>,
    default: []
  },
  params:{
    type :Object as PropType<any>,
    default:()=>({

    })
  }
} as const;

export type SwiperProps = ExtractPropTypes<typeof swiperProps>;
