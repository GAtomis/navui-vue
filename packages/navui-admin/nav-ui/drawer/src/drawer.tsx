import { defineComponent, Transition ,watch} from 'vue';
import type { SetupContext } from 'vue';
import { drawerProps, DrawerProps } from './drawer-types';
import './drawer.scss';
import { Overlay } from "../../overlay"
import { useNamespace } from '../../shared/hooks/use-namespace'
import useDrawer from './hooks/use-drawer'

export default defineComponent({
  name: 'NavDrawer',
  props: drawerProps,
  emits: ['update:modelValue','close','open'],
  setup(props: DrawerProps, ctx) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const ns = useNamespace("drawer")
    const { styles } = useDrawer(props, ctx as SetupContext)
    const beforeClose=()=>{
      ctx.emit('update:modelValue', false);
      ctx.emit('close');
    }
    watch(()=>props.modelValue,(newVal)=>{
      if(newVal){
        ctx.emit('open');
      }

    })
    const Header = () => (<header>
      <div>
        <h1>{ctx.slots?.title?.()??props.title}</h1>
      </div>
      <div >
        <button onClick={beforeClose} class={`${ns.e("button")} ${ns.em("button", "close")} `}>X</button>
      </div>
    </header>)
    return () => {
      return (
        <Overlay visible={props.modelValue} >
          <Transition name={`drawer-fly-${props.position}`}>
            {
              props.modelValue && (<div class={`${ns.b()} ${props.position}`} style={styles.value}>
                {props.withHeader&&<Header />}
                <div>
                  {ctx.slots.default?.()}
                </div>
              </div>)
            }
          </Transition>
        </Overlay>
      );
    };
  }
});