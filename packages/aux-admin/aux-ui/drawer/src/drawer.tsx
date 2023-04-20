import { computed, defineComponent, Transition, watch, ref, nextTick } from 'vue';
import type { SetupContext } from 'vue';
import { drawerProps, DrawerProps } from './drawer-types';
import './drawer.scss';
import { Overlay } from "../../overlay"
import { useNamespace } from '../../shared/hooks/use-namespace'
import useDrawer from './hooks/use-drawer'
import { useMouseInElement } from '@vueuse/core'
import { CLOSE_MODE } from './emum'
export default defineComponent({
  name: 'AuxDrawer',
  props: drawerProps,
  emits: ['update:modelValue', 'close', 'open'],
  inheritAttrs: false,
  setup(props: DrawerProps, ctx) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const ns = useNamespace("drawer")
    const { styles } = useDrawer(props, ctx as SetupContext)
    const beforeClose = () => {
      ctx.emit('update:modelValue', false);
      ctx.emit('close');
    }
    const drawerRef = ref(null)
    const { isOutside } = useMouseInElement(drawerRef)
    const outsideClick = (e: MouseEvent) => {

      closeDrawer()


    }

    watch(() => props.modelValue, (newVal) => {
      if (newVal) {
        setTimeout(() => {
          document.addEventListener('click', outsideClick)
        }, 0);

      } else {
        document.removeEventListener('click', outsideClick)
      }
    })
    const Header = () => (<header>
      <div>
        <h1>{ctx.slots?.title?.() ?? props.title}</h1>
      </div>
      <div >
        <button onClick={beforeClose} class={`${ns.e("button")} ${ns.em("button", "close")} `}>X</button>
      </div>
    </header>)

    const DrawerContainer = () => (<Transition name={`drawer-fly-${props.position}`}>
      {
        props.modelValue && (<div ref={drawerRef} class={`${ns.b()} ${props.position}`} style={styles.value}>
          {props.withHeader && <Header />}
      
            {ctx.slots.default?.()}
     
        </div>)
      }

    </Transition>)
    const closeDrawer = () => {
      props.closeMode === CLOSE_MODE.Outside && beforeClose()
    }


    return () => {


      return props.isOverlay ? (<Overlay v-model={props.modelValue}  >
        <DrawerContainer></DrawerContainer>
      </Overlay>) : (<Overlay  >
        <DrawerContainer></DrawerContainer>
      </Overlay>)
    };
  }
});