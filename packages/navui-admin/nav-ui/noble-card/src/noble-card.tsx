import { computed, defineComponent, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { nobleCardProps, NobleCardProps } from './noble-card-types';
import './noble-card.scss';
import { useNamespace } from '../../shared/hooks/use-namespace'



export default defineComponent({
  name: 'NavNobleCard',
  props: nobleCardProps,
  emits: [],
  setup(props: NobleCardProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const ns = useNamespace("noble-card")
    const wrapClass = computed(() => ({
      [ns.b()]: true,
      [ns.e("wrap")]: true
    }))
    const InfoWrap = () => {
      return <div class={ns.e('info')} >sdasdsd</div>
    }




    return () => {
      return (
        <div class={wrapClass.value}>
          {<></>}
          {/* {<InfoWrap></InfoWrap>} */}
        </div>
      );
    };
  }
});