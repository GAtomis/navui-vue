import { defineComponent, toRefs,SetupContext } from 'vue';
import { nobleCollapseProps, NobleCollapseProps } from './noble-collapse-types';
import './noble-collapse.scss';
import {
  useCollapse
} from './hooks/use-collapse'

export default defineComponent({
  name: 'AuxNobleCollapse',
  props: nobleCollapseProps,
  emits: ["update:modelValue","change"],
  setup(props, ctx) {

    const { slots } = toRefs(ctx)
    const { activeNames, setActiveNames } = useCollapse(props, ctx as SetupContext)
    ctx.expose({activeNames, setActiveNames})
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    return () => {
      return (
        <div class="aux-noble-collapse" role="tablist" aria-multiselectable="true">
          {slots.value.default?.()}
        </div>
      );
    };
  }
});