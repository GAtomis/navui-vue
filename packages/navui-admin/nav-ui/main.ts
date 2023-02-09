/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-08 22:02:14
 * @Description: 组件核心
 */
import type {App} from 'vue'

import GfgButtonInstall,{GfgButton} from "./gfg-button"
import GlowButtonInstall,{GlowButton} from "./glow-button"
import TorchButtonInstall,{TorchButton} from "./torch-button"
const installs =[GfgButtonInstall,GlowButtonInstall,TorchButtonInstall]

export {
    
    GfgButton,
    GlowButton,
    TorchButton
}


export default {
    verison:'0.0.1',
    install(app:App):void{
        installs.forEach(comp=>app.use(comp))
    }
} 