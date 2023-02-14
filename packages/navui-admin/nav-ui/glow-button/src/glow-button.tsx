
import { defineComponent} from 'vue';
import type { SetupContext } from 'vue';
import { GlowButtonProps, glowButtonProps } from './glow-button-types';
import './glow-button.scss';



export default defineComponent({
  name: 'NavGlowButton',
  props: glowButtonProps,
  setup(props: GlowButtonProps, { slots }: SetupContext) {
    

    return () => (
      <button style={`--color:${props.color}`} class={`navui-glowButton `}  >
         <span></span>
        <span></span>
        <span></span>
        <span></span>
        {slots.default?.() ?? "Glow"}
      </button>
    );
  }
});
