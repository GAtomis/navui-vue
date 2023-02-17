import type { PropType, ExtractPropTypes } from 'vue';


export const glowButtonProps = {
  color: {
    type: String ,
    default: "#03e9f4",
  
  },
} as const;

export type GlowButtonProps = ExtractPropTypes<typeof glowButtonProps>;
