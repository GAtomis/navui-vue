import type { PropType, ExtractPropTypes } from 'vue';

export const drawerProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  width:{
    type: String,
    default: "30%",
  },
  zIndex: {
    type: Number,
    default: 1040,
  },
  position: {
    type: String as PropType<'left' | 'right'>,
    default: 'right',
  },
} as const;

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;
