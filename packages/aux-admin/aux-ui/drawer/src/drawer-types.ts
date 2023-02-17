import type { PropType, ExtractPropTypes } from 'vue';

export const drawerProps = {
  modelValue: {
    type: Boolean,
    default: false,
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
    default: 'right',
  },
} as const;

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;
