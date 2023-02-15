import { defineComponent, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { nobleButtonProps, NobleButtonProps } from './noble-button-types';
import './noble-button.scss';

export default defineComponent({
  name: 'NavNobleButton',
  props: nobleButtonProps,
  emits: [],
  setup(props: NobleButtonProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);

    return () => {
      return (
        <button class="navui-noble-button"></button>
      );
    };
  }
});