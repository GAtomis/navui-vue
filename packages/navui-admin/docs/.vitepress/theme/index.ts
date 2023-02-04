/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 20:04:20
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-05 04:24:51
 * @Description: 头部注释
 */
import DefaultTheme from 'vitepress/theme'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Tree from '../../../dev-ui/tree-test'
import BtnGfg from '../../../dev-ui/gfg-button'
import {SearchOutlined} from "@ant-design/icons-vue"

export default {
    ...DefaultTheme,
    enhanceApp(ctx){
        const {app}=ctx
        app.use(Tree)
        app.use(BtnGfg)
        DefaultTheme.enhanceApp(ctx)
        app.component("Demo",Demo)
        app.component("DemoBlock",DemoBlock) 
        app.component("SearchOutlined",SearchOutlined)
    }

 
}