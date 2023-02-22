import { ref,watch ,provide} from 'vue'
import type { SetupContext } from 'vue'
import type { NobleCollapseProps, Model } from '../noble-collapse-types'
import { castArray } from 'lodash-es'
import {collapseContextKey} from './use-key'

export const useCollapse = (
    props: NobleCollapseProps,
    ctx: SetupContext
) => {
    const activeNames = ref<any>(castArray(props.modelValue))

    const setActiveNames = (_activeNames: Model[]) => {
        activeNames.value = _activeNames
        const value = props.accordion ? activeNames.value[0] : activeNames.value
        ctx.emit("update:modelValue", value)
        ctx.emit("change", value)
    }
    const handleItemClick = (name: Model) => {

        console.log(name);
        
        if (props.accordion) {
            const active =   activeNames.value[0] === name?['']:[name]
            setActiveNames(active )
        } else {
            const _activeNames = [...activeNames.value]
            const index = _activeNames.indexOf(name)

            if (index > -1) {
                _activeNames.splice(index, 1)
            } else {
                _activeNames.push(name)
            }
            setActiveNames(_activeNames)
        }
    }

    watch(
        () => props.modelValue,
        (newVal) => {
            console.warn(newVal);
            
            activeNames.value = castArray(props.modelValue)
        },
        { deep: true }
    )

    provide(collapseContextKey, {
        activeNames,
        handleItemClick,
    })

    return {
        activeNames,
        setActiveNames,
    }


}