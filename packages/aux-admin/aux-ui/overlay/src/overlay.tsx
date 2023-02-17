import { defineComponent, watch, Teleport, Transition, computed } from 'vue';
import type { SetupContext } from 'vue';
import { overlayProps, OverlayProps } from './overlay-types';
import './overlay.scss';
import { useNamespace } from '../../shared/hooks/use-namespace'
export default defineComponent({
  name: 'AuxOverlay',
  props: overlayProps,
  emits: ['update:modelValue','close','open'],
  setup(props: OverlayProps, { emit, slots }) {
    const handleClick = (e: Event) => {
      emit('update:modelValue', false);
      emit('close')
    };
    watch(() => props.modelValue, (val) => {  
      if (val) {
        emit('open',open)
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
      <Transition name={ns.e('fade')}>{props.modelValue && <OverlayWrap />} </Transition>
      {slots?.default?.()}
    </Teleport>);
  }
});