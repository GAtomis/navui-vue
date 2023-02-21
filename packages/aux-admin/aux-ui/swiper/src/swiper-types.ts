import type { PropType, ExtractPropTypes } from 'vue';
type Data ={
  src:string
  title:string
  id:string
  [key: string]: any
};

type GetOptions=(options:any)=>any
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
    type :Function as PropType<GetOptions>,
    default:(opt:any)=>opt
  },
} as const;

export type SwiperProps = ExtractPropTypes<typeof swiperProps>;
export const swiperItemProps={
  src:{
    type:String,
    default:"https://avatars.githubusercontent.com/u/40788938?v=4"
  }
}as const;
export type SwiperItemProps = ExtractPropTypes<typeof swiperItemProps>;