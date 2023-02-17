import type { PropType, ExtractPropTypes } from 'vue';
type Data ={
  src:string
  title:string
  id:string
};

type getOptions=(options:any)=>any
export const swiperProps = {
  data: {
    type: Array as PropType<Data[]>,
    default: []
  },
  params:{
    type :Object as PropType<any>,
    default:()=>({

    })
  },
  getOptions:{
    type :Function as PropType<getOptions>,
    default:(opt:any)=>opt
  },
  key:String//防止渲染问题
} as const;

export type SwiperProps = ExtractPropTypes<typeof swiperProps>;
