/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-14 13:31:44
 * @Description: 头部注释
 */
import { createApp } from 'vue'
import App from './App.vue'
import ui from "@library/navui-admin"
import "@library/navui-admin/build/style.css"
//初始化样式
import 'reset-css'
createApp(App).use(ui).mount('#app')
