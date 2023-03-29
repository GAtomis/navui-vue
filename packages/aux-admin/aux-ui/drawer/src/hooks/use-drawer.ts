import {  DrawerProps } from '../drawer-types';
import { computed, SetupContext } from 'vue';
import {DRAWE_Y_LIST,DRAWE_X_LIST} from '../emum'
export default function (props: DrawerProps, ctx: SetupContext) {

    const style=ctx.attrs.style as any||{}
    const styles =computed(()=>({
        height:DRAWE_Y_LIST.includes(props.position)&&props.size||'100%',
        width:DRAWE_X_LIST.includes(props.position)&&props.size||'100%',
        zIndex:props.zIndex,
        ...style
       
    }))
    return {styles}
}