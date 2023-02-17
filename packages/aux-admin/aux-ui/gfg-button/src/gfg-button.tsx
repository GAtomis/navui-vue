
import { defineComponent, toRefs, renderSlot, useSlots } from 'vue';
import type { SetupContext } from 'vue';
import { GfgButtonProps, gfgButtonProps } from './gfg-button-types';
import './gfg-button.scss';



export default defineComponent({
  name: 'AuxGfgButton',
  props: gfgButtonProps,
  setup(props: GfgButtonProps, { slots }: SetupContext) {


    return () => (
      <button class={`aux-gfgButton aux-gfgButton--${props.type}`}  >
        <i class="aux-gfgButton__icon">{slots?.icon?.({
          text: ""
        })}</i>{slots.default?.() ?? "默认"}
      </button>
    );
  }
});
