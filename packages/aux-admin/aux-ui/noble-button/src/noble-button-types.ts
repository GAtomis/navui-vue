import type { PropType, ExtractPropTypes } from 'vue';
type TypeTheme ="primary"|"success"|"confirm";
export const nobleButtonProps = {
  round:Boolean,
  underline:Boolean,
  circle:Boolean,
  fill:Boolean,
  type:String as PropType<TypeTheme>,
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
