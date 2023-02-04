/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-05 04:41:09
 * @Description: 头部注释
 */
import type {App} from 'vue'
import TreeInstall,{TreeTest} from './tree-test'
import GfgButtonInstall,{GfgButton} from "./gfg-button"

const installs =[TreeInstall,GfgButtonInstall]

export {
    TreeTest,
    GfgButton
}


export default {
    verison:'0.0.1',
    install(app:App):void{
        installs.forEach(comp=>app.use(comp))
    }
} 