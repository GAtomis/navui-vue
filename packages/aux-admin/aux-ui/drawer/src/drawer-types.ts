import type { PropType, ExtractPropTypes } from 'vue';
import {DIRECTION,CLOSE_MODE} from './emum'
export const drawerProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  isOverlay:{
    type:Boolean,
    default:true
  },
  closeMode:{
    type:  String as PropType<'outside'| 'none'>,
    default:()=>CLOSE_MODE.Outside 
  },
  size:{
    type: String,
    default: "30%",
  },
  zIndex: {
    type: Number,
    default: 1400,
  },
  title:{
    type:String,
    default:""
  },
  withHeader:{
    type:Boolean,
    default:true
  },
  position: {
    type: String as PropType<'left' | 'right'|'top'|'bottom'>,
    default:DIRECTION.Right,
  },
} as const;

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;
