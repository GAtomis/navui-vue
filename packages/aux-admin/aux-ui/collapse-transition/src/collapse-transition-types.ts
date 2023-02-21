import type { PropType, ExtractPropTypes } from 'vue';

export const collapseTransitionProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type CollapseTransitionProps = ExtractPropTypes<typeof collapseTransitionProps>;
