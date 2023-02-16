import type { PropType, ExtractPropTypes } from 'vue';

export const nobleCardProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type NobleCardProps = ExtractPropTypes<typeof nobleCardProps>;
