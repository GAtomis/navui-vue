import type { PropType, ExtractPropTypes } from 'vue';

export const overlayProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type OverlayProps = ExtractPropTypes<typeof overlayProps>;
