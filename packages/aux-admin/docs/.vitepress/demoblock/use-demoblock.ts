/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-05 12:58:56
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-17 16:06:27
 * @Description: 头部注释
 */


import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import Demo from './demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import demoComp from 'vitepress-demoblock/demo.vue'
export function useDemoBlock() {

    return {

        install:(app:any)=>{
            app.component('Demo', Demo)
        }
    }
}
export function useThemeDemoBlock() {
    const demo= {
        install:(app:any)=>{
            app.component("Demo",Demo)
            app.component("DemoBlock",DemoBlock) 
        }
    }

    return {
        demoBlockPlugin,
        demo
    }
}

