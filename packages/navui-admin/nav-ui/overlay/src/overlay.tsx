import { defineComponent, toRefs ,renderSlot,Teleport,Transition} from 'vue';
import type { SetupContext } from 'vue';
import { overlayProps, OverlayProps } from './overlay-types';
import './overlay.scss';
import {useNamespace} from '../../shared/hooks/use-namespace'
export default defineComponent({
  name: 'NavOverlay',
  props: overlayProps,
  setup(props: OverlayProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const ns = useNamespace('overlay');
    const Overlay=()=><div class={ns.b()}>{renderSlot(ctx.slots, 'default')}</div>
    return () => {
      return (
        <Teleport to="body">
          <Transition name={ns.e('fade')}>{<Overlay/>}</Transition>
        </Teleport>
      );
    };
  }
});