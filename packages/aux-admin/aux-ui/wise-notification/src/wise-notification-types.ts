import type { PropType, ExtractPropTypes } from 'vue';

export const wiseNotificationProps = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type WiseNotificationProps = ExtractPropTypes<typeof wiseNotificationProps>;
