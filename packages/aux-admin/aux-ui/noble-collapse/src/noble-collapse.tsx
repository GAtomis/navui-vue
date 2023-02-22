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
    return () => {
      return (
        <div class="aux-noble-collapse" role="tablist" aria-multiselectable="true">
          {slots.value.default?.()}
        </div>
      );
    };
  }
});