import { computed, defineComponent, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { nobleCardProps } from './noble-card-types';
import './noble-card.scss';
import { useNamespace } from '../../shared/hooks/use-namespace'



export default defineComponent({
  name: 'AuxNobleCard',
  props: nobleCardProps,
  emits: [],
  setup(props, ctx) {
    // 直接解构 props 会导致响应式失效需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const ns = useNamespace("noble-card")
    const wrapClass = computed(() => ({
      [ns.b()]: true,
      [ns.e("wrap")]: true
    }))
    const InfoWrap = () => {
      return <div class={ns.e('info')} > {ctx.slots?.info?.()}</div>
    }
    const MediaWrap = () => {
      return <div class={ns.e('media')} > {ctx.slots?.media?.()} </div>
    }
    return () => {
      return (
        <div class={wrapClass.value}>
          {<InfoWrap></InfoWrap>
          }
          {
            <MediaWrap></MediaWrap>
          }
          {ctx.slots?.default?.()}
        </div>
      );
    };
  }
});