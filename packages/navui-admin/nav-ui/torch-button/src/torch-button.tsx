/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-06 22:38:05
 * @Description: 头部注释
 */
import { defineComponent, toRefs, renderSlot, useSlots } from 'vue';
import type { SetupContext } from 'vue';
import { GlowButtonProps, glowButtonProps } from './torch-button-types';
import './glow-button.scss';



export default defineComponent({
  name: 'NavGlowButton',
  props: glowButtonProps,
  setup(props: GlowButtonProps, { slots }: SetupContext) {
    

    return () => (
      <button style={`--color:${props.color}`} class={`navui-glowButton `}  >
         <span></span>
        <span></span>
        <span></span>
        <span></span>
        {slots.default?.() ?? "Glow"}
      </button>
    );
  }
});
