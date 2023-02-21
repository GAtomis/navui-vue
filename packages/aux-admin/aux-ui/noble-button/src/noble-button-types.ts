import type { PropType, ExtractPropTypes } from 'vue';

export const nobleButtonProps = {
  round:Boolean,
  underline:Boolean,
  circle:Boolean,
  color:{
    type:String,
    default:""
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;

export type NobleButtonProps = ExtractPropTypes<typeof nobleButtonProps>;
