

import type { InjectionKey } from 'vue'



export function getSymbol<T>(title:string) {
 
    return Symbol(title) as InjectionKey<T>
}



