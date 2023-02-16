import { type } from 'os';
import type { PropType, ExtractPropTypes } from 'vue';
type Mode="normal"|"component"
export const overlayProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
  visible: {
    type: Boolean,
    default: false,
  },
  mode:{
    type:String as  PropType<Mode>,
    default:"normal"
  },
  onClick: {
    type: Function,
  },



} as const;

export type OverlayProps = ExtractPropTypes<typeof overlayProps>;
