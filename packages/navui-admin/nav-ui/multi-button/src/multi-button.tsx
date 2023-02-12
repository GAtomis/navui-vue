/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-13 00:52:26
 * @Description: multi-button
 */
import { defineComponent, ref, inject, computed, } from 'vue';
import type { SetupContext, Ref } from 'vue';
import { MultiButtonProps, multiButtonProps } from './multi-button-types';
import useMouseEnterDirection from "./hooks/useMouseEnterDirection"
import './multi-button.scss';
export default defineComponent({
  name: 'NavMultiButton',
  props: multiButtonProps,
  setup(props: MultiButtonProps, { slots }: SetupContext) {
    const btn = ref<HTMLButtonElement>()
    const {to}=useMouseEnterDirection(btn)
    //继承Tooltip
    const superIsTooltip = inject<Ref<Boolean>>("tooltip")
    const tooltip = computed(() => superIsTooltip?.value || props.tooltip)
    //tip组件
    const Tooltip= ()=><div class={`navui-multiButton-tooltip animate-${to.value}`}>{slots?.tooltip?.({
      text: props.tip
    })??props.tip}</div>
    return () => (
      <button  ref={btn} class={`navui-multiButton`}>
        {slots.default?.() ?? ""}
        {tooltip.value?<Tooltip></Tooltip>:``}
      </button>
    );
  }
});
