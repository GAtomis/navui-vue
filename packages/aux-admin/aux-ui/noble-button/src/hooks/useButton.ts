
import { nobleButtonProps, NobleButtonProps } from '../noble-button-types';
import { computed, SetupContext } from 'vue';
import { useNamespace } from '../../../shared/hooks/use-namespace'
export default function (props: NobleButtonProps, ctx: SetupContext) {
    const gs = useNamespace()
    const ns = useNamespace("noble-button")


    const classes = computed(() => {

        return {
            [gs.m('underline')]: !props.disabled && props.underline,
            [ns.b()]: true,
            [ns.m('center')]: true,
            [ns.m('round')]: props.round,
            [ns.m('circle')]: props.circle,
            [ns.m('default')]: !props.fill,
            [ns.m('fill')]: props.fill,
            ['enabled']: !props.disabled,
            ['disabled']: props.disabled,
            [props?.type??'']:true
        }   
   })
const color = computed(() => props.disabled ? "#b3a7a7" : props.color)



return { classes, gs, ns, color }




}