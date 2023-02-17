
import type { PropType, ExtractPropTypes } from 'vue';


export const multiButtonGroupProps = {
  activeColor: {
    type: String ,
    default: "#d6d8e1",
  },
  hoverColor: {
    type: String ,
    default: "#f0f1f4",
  },
  tooltip:{
    type:Boolean
  }
} as const;

export type MultiButtonGroupProps = ExtractPropTypes<typeof multiButtonGroupProps>;
