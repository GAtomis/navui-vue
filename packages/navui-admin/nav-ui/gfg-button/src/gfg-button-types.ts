
import type { PropType, ExtractPropTypes } from 'vue';

type TypeColors ="primary"|"success"|"danger";
export const gfgButtonProps = {
  type: {
    type: String as  PropType<TypeColors>,
    default: "primary",
    required:true
  },
} as const;

export type GfgButtonProps = ExtractPropTypes<typeof gfgButtonProps>;
