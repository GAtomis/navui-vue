/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-12 22:59:58
 * @Description: 头部注释
 */
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
