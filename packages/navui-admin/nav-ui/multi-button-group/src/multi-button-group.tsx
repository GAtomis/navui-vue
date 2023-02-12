/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-12 19:57:49
 * @Description: multi-button-group
 */
import { defineComponent, provide, computed, onMounted, ref } from 'vue';
import type { SetupContext } from 'vue';
import { MultiButtonGroupProps, multiButtonGroupProps } from './multi-button-group-types';
import './multi-button-group.scss';
export default defineComponent({
  name: 'NavMultiButtonGroup',
  props: multiButtonGroupProps,
  setup(props: MultiButtonGroupProps, { slots }: SetupContext) {

    const multiButtonGroupRef = ref<HTMLButtonElement>()
    const isTooltip = computed(() => props.tooltip)
    provide("isTooltip", isTooltip)
    return () => (
      <div style={`--color:${props.color}`} ref={multiButtonGroupRef} class={`navui-multiButtonGroup`}>
        {slots.default?.() ?? ""}
      </div>
    );
  }
});
