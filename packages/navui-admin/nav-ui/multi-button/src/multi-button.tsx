/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-12 20:30:45
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
    const superIsTooltip = inject<Ref<Boolean>>("isTooltip")
    const isTooltip = computed(() => superIsTooltip?.value || props.isTooltip)

    //tip组件
    const Tooltip= ()=><div  class={`navui-multiButton-tooltip animate-${to.value}`}>Tips</div>
 
    return () => (
      <button style={`--color:${props.color}`} ref={btn} class={`navui-multiButton`}>
        {slots.default?.() ?? ""}
        {isTooltip.value?<Tooltip></Tooltip>:``}

      </button>
    );
  }
});
