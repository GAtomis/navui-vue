import { defineComponent, watch, Teleport, Transition, computed } from 'vue';
import type { SetupContext } from 'vue';
import { overlayProps, OverlayProps } from './overlay-types';
import './overlay.scss';
import { lockScroll } from '../../shared/utils/lockscroll'
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
    watch(() => props.visible, (val) => {
      if (val) {
        setBody("hidden")
      } else {
        setBody()
      }
    })
    //禁止滚动
    const setBody = (str: string = "") => {
      document.getElementsByTagName('body')[0].style.overflow = str;
    }

    const ns = useNamespace('overlay');

    const OverlayWrap = () => <div class={ns.b()} onClick={handleClick}></div>
    return () => (<Teleport to="body">
      <Transition name={ns.e('fade')}>{props.visible && <OverlayWrap />} </Transition>
      {slots?.default?.()}
    </Teleport>);
  }
});