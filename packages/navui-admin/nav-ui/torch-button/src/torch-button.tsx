/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-12 17:07:28
 * @Description: torch-button
 */
import { defineComponent, toRefs, renderSlot, useSlots, inject, computed,  } from 'vue';
import type { SetupContext, Ref } from 'vue';
import { TorchButtonProps, torchButtonProps } from './torch-button-types';
import './torch-button.scss';
export default defineComponent({
  name: 'NavTorchButton',
  props: torchButtonProps,
  setup(props: TorchButtonProps, { slots }: SetupContext) {
    //继承Tooltip
    const superIsTooltip = inject<Ref<Boolean>>("isTooltip")

    const isTooltip = computed(() => superIsTooltip?.value || props.isTooltip)

    return () => (
      <button style={`--color:${props.color}`} class={`navui-torchButton`}>
        {slots.default?.() ?? ""}
        <div class="navui-torchButton-tooltip">Tips</div>
      </button>
    );
  }
});
