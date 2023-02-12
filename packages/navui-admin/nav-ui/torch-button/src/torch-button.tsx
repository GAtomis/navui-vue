/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-12 11:40:02
 * @Description: torch-button
 */
import { defineComponent, toRefs, renderSlot, useSlots } from 'vue';
import type { SetupContext } from 'vue';
import { TorchButtonProps, torchButtonProps } from './torch-button-types';
import './torch-button.scss';
export default defineComponent({
  name: 'NavTorchButton',
  props: torchButtonProps,
  setup(props: TorchButtonProps, { slots }: SetupContext) {
    const buttonRef = (item: any) => <><button></button></>
    return () => (
      <div style={`--color:${props.color}`} class={`navui-torchButton`}>
        {slots.default?.() ?? ""}
      </div>
    );
  }
});
