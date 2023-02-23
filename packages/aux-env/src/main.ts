/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-23 22:30:53
 * @Description: 头部注释
 */
import { createApp } from 'vue'
import App from './App.vue'
import ui from "aux-ui"
import "aux-ui/build/style.css"
//初始化样式
import 'reset-css'
createApp(App).use(ui).mount('#app')
