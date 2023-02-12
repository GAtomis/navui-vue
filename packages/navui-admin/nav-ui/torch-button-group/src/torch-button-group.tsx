/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 23:35:12
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-12 17:27:48
 * @Description: torch-button-group
 */
import { defineComponent, provide, computed, onMounted, ref } from 'vue';
import type { SetupContext } from 'vue';
import { TorchButtonGroupProps, torchButtonGroupProps } from './torch-button-group-types';
import './torch-button-group.scss';
export default defineComponent({
  name: 'NavTorchButtonGroup',
  props: torchButtonGroupProps,
  setup(props: TorchButtonGroupProps, { slots }: SetupContext) {

    const torchButtonGroupRef = ref<HTMLButtonElement>()
    onMounted(() => {
      console.log(torchButtonGroupRef)
      const buttons = torchButtonGroupRef.value?.children ?? []
      if (buttons.length) {
        const newButtons = Array.from(buttons)
        newButtons.forEach((button, index) => {

          if (index > 0) {
            const prevTooltip = newButtons[index - 1].querySelector("div");
            prevTooltip?.classList.remove("animate-right");
            prevTooltip?.classList.add("animate-left");
          }
          if (index < newButtons.length - 1) {
            const nextTooltip = newButtons[index + 1].querySelector("div");
            nextTooltip?.classList.remove("animate-left");
            nextTooltip?.classList.add("animate-right");
          }
        })

      }

      // const buttons = document.querySelectorAll(".navui-torchButton button");
      // buttons.forEach((button, index) => {
      //   button.addEventListener("mouseover", () => {
      //     if (index > 0) {
      //       const prevTooltip = buttons[index - 1].querySelector("div");
      //       prevTooltip.classList.remove("animate-right");
      //       prevTooltip.classList.add("animate-left");
      //     }
      //     if (index < buttons.length - 1) {
      //       const nextTooltip = buttons[index + 1].querySelector("div");
      //       nextTooltip.classList.remove("animate-left");
      //       nextTooltip.classList.add("animate-right");
      //     }
      //   });
      // });
    })

    const isTooltip = computed(() => props.tooltip)
    provide("isTooltip", isTooltip)
    return () => (
      <div style={`--color:${props.color}`} ref={torchButtonGroupRef} class={`navui-torchButtonGroup`}>
        {slots.default?.() ?? ""}
      </div>
    );
  }
});
