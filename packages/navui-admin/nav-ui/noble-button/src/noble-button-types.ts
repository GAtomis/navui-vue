import type { PropType, ExtractPropTypes } from 'vue';

export const nobleButtonProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type NobleButtonProps = ExtractPropTypes<typeof nobleButtonProps>;
