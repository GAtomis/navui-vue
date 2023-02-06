/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-06 16:09:25
 * @Description: 头部注释
 */
import { defineComponent, toRefs, renderSlot, useSlots } from 'vue';
import type { SetupContext } from 'vue';
import { GlowButtonProps, glowButtonProps } from './glow-button-types';
import './glow-button.scss';



export default defineComponent({
  name: 'NavGlowButton',
  props: glowButtonProps,
  setup(props: GlowButtonProps, { slots }: SetupContext) {


    return () => (
      <button class={`navui-glowButton navui-glowButton--${props.type}`}  >
        <i class="navui-glowButton__icon">{slots?.icon?.({
          text: ""
        })}</i>{slots.default?.() ?? "默认"}
      </button>
    );
  }
});
