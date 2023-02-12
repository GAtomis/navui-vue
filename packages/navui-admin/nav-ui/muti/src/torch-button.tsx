/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-07 23:51:37
 * @Description: 头部注释
 */
import { defineComponent, toRefs, renderSlot, useSlots } from 'vue';
import type { SetupContext } from 'vue';
import { MultiButtonProps, multiButtonProps } from './multi-button-types';
import './multi-button.scss';
export default defineComponent({
  name: 'NavMultiButton',
  props: multiButtonProps,
  setup(props: MultiButtonProps, { slots }: SetupContext) {
    

    return () => (
      <button style={`--color:${props.color}`} class={`navui-multiButton `}  >
         <span></span>
        <span></span>
        <span></span>
        <span></span>
        {slots.default?.() ?? "Glow"}
      </button>
    );
  }
});
