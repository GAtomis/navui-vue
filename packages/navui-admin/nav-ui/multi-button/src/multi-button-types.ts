/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-13 00:01:44
 * @Description: 头部注释
 */
import type { PropType, ExtractPropTypes } from 'vue';


export const multiButtonProps = {
  tooltip:Boolean,
  tip:{
    type:String,
    default:"tips"
  }
} as const;

export type MultiButtonProps = ExtractPropTypes<typeof multiButtonProps>;
