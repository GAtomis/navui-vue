import type { PropType, ExtractPropTypes } from 'vue';

export const overlayProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
  visible: {
    type: Boolean,
    default: false,
  },
  onClick: {
    type: Function,
  },


} as const;

export type OverlayProps = ExtractPropTypes<typeof overlayProps>;
