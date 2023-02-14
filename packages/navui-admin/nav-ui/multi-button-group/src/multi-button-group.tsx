
import { defineComponent, provide, computed, onMounted, ref } from 'vue';
import type { SetupContext } from 'vue';
import { MultiButtonGroupProps, multiButtonGroupProps } from './multi-button-group-types';
import './multi-button-group.scss';
export default defineComponent({
  name: 'NavMultiButtonGroup',
  props: multiButtonGroupProps,
  setup(props: MultiButtonGroupProps, { slots }: SetupContext) {

    const multiButtonGroupRef = ref<HTMLButtonElement>()
    const tooltip = computed(() => props.tooltip)
    provide("tooltip", tooltip)
    return () => (
      <div style={`--hoverColor:${props.hoverColor};--activeColor:${props.activeColor}`} ref={multiButtonGroupRef} class={`navui-multiButtonGroup`}>
        {slots.default?.() ?? ""}
      </div>
    );
  }
});
