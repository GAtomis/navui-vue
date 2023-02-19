import type { PropType, ExtractPropTypes } from 'vue';

export const nobleCardProps = {
  title:String
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type NobleCardProps = ExtractPropTypes<typeof nobleCardProps>;
