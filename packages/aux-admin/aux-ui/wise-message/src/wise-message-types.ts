import type { PropType, ExtractPropTypes } from 'vue';

export const wiseMessageProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type WiseMessageProps = ExtractPropTypes<typeof wiseMessageProps>;
