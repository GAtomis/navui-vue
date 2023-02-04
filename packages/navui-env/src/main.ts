/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-05 04:46:23
 * @Description: 头部注释
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ui from "@library/navui-admin"
import "@library/navui-admin/build/style.css"
createApp(App).use(ui).mount('#app')
