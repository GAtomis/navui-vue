/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-05 16:11:22
 * @Description: 头部注释
 */
import type {App} from 'vue'

import GfgButtonInstall,{GfgButton} from "./gfg-button"

const installs =[GfgButtonInstall]

export {
    
    GfgButton
}


export default {
    verison:'0.0.1',
    install(app:App):void{
        installs.forEach(comp=>app.use(comp))
    }
} 