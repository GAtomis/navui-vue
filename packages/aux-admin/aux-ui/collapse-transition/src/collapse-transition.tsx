import { defineComponent, toRefs, Transition } from 'vue';
import type { RendererElement } from 'vue';
// import { collapseTransitionProps, CollapseTransitionProps } from './collapse-transition-types';
import './collapse-transition.scss';
import { useNamespace } from '../../shared/hooks/use-namespace'

export default defineComponent({
  name: 'AuxCollapseTransition',
  // props: collapseTransitionProps,
  emits: [],
  setup(props, ctx) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const ns = useNamespace('collapse-transition')
    const on = {
      onBeforeEnter: (el: RendererElement) => {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.style.maxHeight = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      },
      onEnter: (el: RendererElement) => {
        el.dataset.oldOverflow = el.style.overflow
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = `${el.scrollHeight}px`
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        } else {
          el.style.maxHeight = 0
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        }
        el.style.overflow = 'hidden'
      },
      onAfterEnter: (el: RendererElement) => {
        el.style.maxHeight = ''
        el.style.overflow = el.dataset.oldOverflow
      },
      onBeforeLeave: (el: RendererElement) => {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.dataset.oldOverflow = el.style.overflow
        el.style.maxHeight = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
      },
      onLeave: (el: RendererElement) => {

        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        }
      },
      onAfterLeave: (el: RendererElement) => {

        el.style.maxHeight = ''
        el.style.overflow = el.dataset.oldOverflow
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      },
    }
    return () => {
      return (
        <Transition name={ns.b()} {...on}>
          {ctx.slots?.default?.()}
        </Transition>
      );
    };
  }
});