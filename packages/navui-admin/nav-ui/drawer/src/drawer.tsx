import { defineComponent, Transition } from 'vue';
import type { SetupContext } from 'vue';
import { drawerProps, DrawerProps } from './drawer-types';
import './drawer.scss';
import {Overlay} from "../../overlay"
import  {useNamespace} from '../../shared/hooks/use-namespace'
export default defineComponent({
  name: 'NavDrawer',
  props: drawerProps,
  emits: [],
  setup(props: DrawerProps, {slots}) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);
    const ns=useNamespace("drawer")

    return () => {
      return (
        <Overlay visible={props.modelValue}>
          <Transition name={`drawer-fly-${props.position}`}>  
            {
              props.modelValue&& (<div class={`${ns.b()} ${props.position}`} style={{width:props.width}}> 
                 {slots.default?.()   }   
            </div>)
            }
          </Transition>
        </Overlay>
      );
    };
  }
});