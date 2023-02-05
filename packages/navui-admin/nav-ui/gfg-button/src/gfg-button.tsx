/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-05 05:02:37
 * @Description: 头部注释
 */
import { defineComponent, toRefs,renderSlot, useSlots } from 'vue';
import type { SetupContext } from 'vue';
import { GfgButtonProps, gfgButtonProps } from './gfg-button-types';
import './gfg-button.scss';



export default defineComponent({
  name: 'NavGfgButton',
  props: gfgButtonProps,
  setup(props: GfgButtonProps, {slots}: SetupContext) {


    return () => (<div class="navui-gfgButton">
      <button class={`navui-gfgButton__btn navui-gfgButton--${props.type}`}  >
            <i class="navui-gfgButton__icon">{slots?.icon?.({
              text:""
            })}</i>{slots.default?.()??"默认"}
      </button>
      

    </div >);
  }
});
