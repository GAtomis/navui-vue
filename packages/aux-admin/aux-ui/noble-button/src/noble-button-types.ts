import type { PropType, ExtractPropTypes } from 'vue';

export const nobleButtonProps = {
  round:Boolean,
  underline:Boolean,
  circle:Boolean,
  color:{
    type:String,
    default:""
  }
} as const;

export type NobleButtonProps = ExtractPropTypes<typeof nobleButtonProps>;
