/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-12 16:19:42
 * @Description: 头部注释
 */
import type { PropType, ExtractPropTypes } from 'vue';


export const multiButtonGroupProps = {
  color: {
    type: String ,
    default: "#03e9f4",
  
  },
  tooltip:{
    type:Boolean
  }
} as const;

export type MultiButtonGroupProps = ExtractPropTypes<typeof multiButtonGroupProps>;
