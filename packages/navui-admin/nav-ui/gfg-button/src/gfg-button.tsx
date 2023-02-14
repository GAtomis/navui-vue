
import { defineComponent, toRefs, renderSlot, useSlots } from 'vue';
import type { SetupContext } from 'vue';
import { GfgButtonProps, gfgButtonProps } from './gfg-button-types';
import './gfg-button.scss';



export default defineComponent({
  name: 'NavGfgButton',
  props: gfgButtonProps,
  setup(props: GfgButtonProps, { slots }: SetupContext) {


    return () => (
      <button class={`navui-gfgButton navui-gfgButton--${props.type}`}  >
        <i class="navui-gfgButton__icon">{slots?.icon?.({
          text: ""
        })}</i>{slots.default?.() ?? "默认"}
      </button>
    );
  }
});
