/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-06 16:49:08
 * @Description: 头部注释
 */
import type { PropType, ExtractPropTypes } from 'vue';

type TypeColors ="primary"|"success"|"danger";
export const glowButtonProps = {
  type: {
    type: String as  PropType<TypeColors>,
    default: "primary",
    required:true
  },
} as const;

export type GlowButtonProps = ExtractPropTypes<typeof glowButtonProps>;
