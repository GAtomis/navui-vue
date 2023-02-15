
import { nobleButtonProps, NobleButtonProps } from '../noble-button-types';
import { computed, SetupContext } from 'vue';
import {useNamespace} from '../../../shared/hooks/use-namespace'
export default function (props: NobleButtonProps, ctx: SetupContext) {
    const gs = useNamespace()
    const ns=  useNamespace("noble-button")
 
    
   const  classes  =computed(()=>{

    return {
        [gs.m('underline')]:props.underline,
        [ns.b()]:true,
        [ns.m('transparent')]:true,
        [ns.m('center')]:true,
        [ns.m('round')]:props.round,
        [ns.m('circle')]:props.circle,
    }
   })
 
   

   return {classes,gs,ns}




}