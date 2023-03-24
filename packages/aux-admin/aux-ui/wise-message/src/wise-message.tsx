import { defineComponent, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { wiseMessageProps, WiseMessageProps } from './wise-message-types';
import './wise-message.scss';

export default defineComponent({
  name: 'AuxWiseMessage',
  props: wiseMessageProps,
  emits: [],
  setup(props: WiseMessageProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);

    return () => {
      return (
        <div class="aux-wise-message"></div>
      );
    };
  }
});