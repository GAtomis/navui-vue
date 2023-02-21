import type { PropType, ExtractPropTypes } from 'vue';

export const nobleCollapseProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type NobleCollapseProps = ExtractPropTypes<typeof nobleCollapseProps>;
