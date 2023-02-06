/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-06 19:44:29
 * @Description: 头部注释
 */
import type { PropType, ExtractPropTypes } from 'vue';


export const glowButtonProps = {
  color: {
    type: String ,
    default: "#03e9f4",
  
  },
} as const;

export type GlowButtonProps = ExtractPropTypes<typeof glowButtonProps>;