import { defineComponent, toRefs } from 'vue';
import type {SetupContext} from 'vue'
import { nobleButtonProps, NobleButtonProps } from './noble-button-types';
import './noble-button.scss';
import useButton from './hooks/useButton';

export default defineComponent({
  name: 'AuxNobleButton',
  props: nobleButtonProps,
  emits: [],
  setup(props: NobleButtonProps, ctx) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const {classes,color} =useButton(props,ctx as SetupContext)

    return () =><button disabled={props.disabled} style={color.value&&`--aux-text-color:${color.value}`} class={classes.value }>{ctx.slots.default?.() ?? "noble-button"}</button>
  }
});