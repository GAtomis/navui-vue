
import { useMouseInElement,MaybeElementRef } from '@vueuse/core'
import { computed } from 'vue'

 

 /**
  * @description: 获得元素朝向
  * @param {MaybeElementRef} target-元素
  * @return {*}  from-来自的方向,to-目标方向
  */
 export default function useMouseEnterDirection(target:MaybeElementRef){
    const { x, y,elementX,elementY, isOutside,elementWidth,elementHeight } = useMouseInElement(target)
    let perPosition=""
    const from= computed( ()=>{
        if(isOutside.value&&elementX.value<0) perPosition='left';
        if(isOutside.value&&elementX.value>elementWidth.value) perPosition='right'; 
        if(isOutside.value&&elementY.value<0 )perPosition="top"
        if(isOutside.value&&elementY.value>elementHeight.value)perPosition="bottom"   
        return perPosition
    })
    const to=computed(()=>{
        let direction
           switch (from.value) {
                case "left":  direction="right"               
                    break;    
                case "right": direction="left"
                break;
                case "top": direction="bottom"
                break;
                case "bottom": direction="top"
                break;
                default: direction="right"
                break;
            }
            return direction
    })

    return {from,to}
}