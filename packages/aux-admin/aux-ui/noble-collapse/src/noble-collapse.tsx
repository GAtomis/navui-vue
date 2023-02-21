import { defineComponent, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { nobleCollapseProps, NobleCollapseProps } from './noble-collapse-types';
import './noble-collapse.scss';

export default defineComponent({
  name: 'AuxNobleCollapse',
  props: nobleCollapseProps,
  emits: [],
  setup(props: NobleCollapseProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);

    return () => {
      return (
        <div class="aux-noble-collapse" role="tablist" aria-multiselectable="true"></div>
      );
    };
  }
});