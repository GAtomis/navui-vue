import { defineComponent, toRefs, renderSlot, Teleport, Transition } from 'vue';
import type { SetupContext } from 'vue';
import { overlayProps, OverlayProps } from './overlay-types';
import './overlay.scss';
import { useNamespace } from '../../shared/hooks/use-namespace'
export default defineComponent({
  name: 'NavOverlay',
  props: overlayProps,
  emits: ['click'],
  setup(props: OverlayProps, { emit, slots }: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const handleClick = (e: Event) => {
      emit('click', e);
    };
    const ns = useNamespace('overlay');
    const OverlayWrap = () => <div class={ns.b()} onClick={handleClick}></div>
    return () => (<Teleport to="body">
      <Transition name={ns.e('fade')}>{props.visible && <OverlayWrap />} </Transition>
      {renderSlot(slots, 'default')}
    </Teleport>);
  }
});