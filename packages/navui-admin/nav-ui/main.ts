/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-12 16:27:21
 * @Description: 组件核心
 */
import type {App} from 'vue'

import GfgButtonInstall,{GfgButton} from "./gfg-button"
import GlowButtonInstall,{GlowButton} from "./glow-button"
import MultiButtonGroupInstall,{MultiButtonGroup} from "./multi-button-group"
import MultiButtonInstall,{MultiButton} from "./multi-button"
const installs =[GfgButtonInstall,GlowButtonInstall,MultiButtonGroupInstall,MultiButtonInstall]

export {
    
    GfgButton,
    GlowButton,
    MultiButtonGroup,
    MultiButton
}


export default {
    verison:'0.0.1',
    install(app:App):void{
        installs.forEach(comp=>app.use(comp))
    }
} 