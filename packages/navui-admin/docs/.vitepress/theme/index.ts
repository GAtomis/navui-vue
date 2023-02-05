/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 20:04:20
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-05 13:15:03
 * @Description: 头部注释
 */
import DefaultTheme from 'vitepress/theme'
import {useThemeDemoBlock,useDemoBlock} from '../demoblock/use-demoblock'
// import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Tree from '../../../dev-ui/tree-test'
import BtnGfg from '../../../dev-ui/gfg-button'
import {SearchOutlined} from "@ant-design/icons-vue"

export default {
    ...DefaultTheme,
    enhanceApp(ctx){
        // const {demo} =useThemeDemoBlock()
        const demo =useDemoBlock()
        const {app}=ctx
        app.use(Tree)
        app.use(BtnGfg)
        DefaultTheme.enhanceApp(ctx)
        app.use(demo)
        app.component("SearchOutlined",SearchOutlined)
    }

 
}