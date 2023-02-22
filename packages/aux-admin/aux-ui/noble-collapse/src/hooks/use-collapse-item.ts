
import { computed, inject, ref, unref } from 'vue'
import type { SetupContext } from 'vue'
import { NobleCollapseItemProps } from '../noble-collapse-types';
import { generateId } from '../../../shared/utils'
import { collapseContextKey } from './use-key'


export const useCollapseItem = (props: NobleCollapseItemProps, ctx: SetupContext) => {
    //父组件
    const collapse = inject(collapseContextKey)

    const focusing = ref(false)
    const isClick = ref(false)
    const id = ref(generateId())
    const isActive = computed(() =>
        collapse?.activeNames.value.includes(props.name)
    )
    const handleFocus = () => {
        console.log(isClick.value,focusing.value );
        
        setTimeout(() => {
            if (!isClick.value) {
                focusing.value = true
            } else {
                isClick.value = false
            }
        }, 50)
    }
    const handleHeaderClick = (e:MouseEvent) => {
        // console.log(isClick.value,focusing.value );
        if (props.disabled) return
        collapse?.handleItemClick(props.name)
        focusing.value = false
        isClick.value = true
    }

    const handleEnterClick = () => {

      collapse?.handleItemClick(props.name)
    }

    return {
        handleHeaderClick,
        handleFocus, 
        handleEnterClick,
        isActive, 
        id, 
        focusing, 
        collapse
    }


}