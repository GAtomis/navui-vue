import type { PropType, ExtractPropTypes } from 'vue';

export const swiperProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type SwiperProps = ExtractPropTypes<typeof swiperProps>;
