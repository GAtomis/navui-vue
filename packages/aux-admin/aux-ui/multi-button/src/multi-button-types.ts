import type { PropType, ExtractPropTypes } from 'vue';


export const multiButtonProps = {
  tooltip:Boolean,
  tip:{
    type:String,
    default:"tips"
  }
} as const;

export type MultiButtonProps = ExtractPropTypes<typeof multiButtonProps>;
