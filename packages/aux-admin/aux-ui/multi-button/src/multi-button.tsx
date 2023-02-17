
import { defineComponent, ref, inject, computed, } from 'vue';
import type { SetupContext, Ref } from 'vue';
import { MultiButtonProps, multiButtonProps } from './multi-button-types';
import useMouseEnterDirection from "./hooks/useMouseEnterDirection"
import './multi-button.scss';
export default defineComponent({
  name: 'AuxMultiButton',
  props: multiButtonProps,
  setup(props: MultiButtonProps, { slots }: SetupContext) {
    const btn = ref<HTMLButtonElement>()
    const {to}=useMouseEnterDirection(btn)
    //继承Tooltip
    const superIsTooltip = inject<Ref<Boolean>>("tooltip")
    const tooltip = computed(() => superIsTooltip?.value || props.tooltip)
    //tip组件
    const Tooltip= ()=><div class={`aux-multiButton-tooltip animate-${to.value}`}>{slots?.tooltip?.({
      text: props.tip
    })??props.tip}</div>
    return () => (
      <button  ref={btn} class={`aux-multiButton`}>
        {slots.default?.() ?? ""}
        {tooltip.value?<Tooltip></Tooltip>:``}
      </button>
    );
  }
});
