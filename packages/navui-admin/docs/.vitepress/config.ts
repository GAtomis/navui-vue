

// import { demoBlockPlugin } from 'vitepress-theme-demoblock'
// import {useThemeDemoBlock}from './demoblock/use-demoblock'
import demoblock from 'vitepress-demoblock';
import  {footer,nav,sidebar} from './layout/index'
export default {
    title: 'NavNav+',
    description: '这是个有趣的组件合集',
    appearance: true,
    base:"/navui-vue-docs/",
    themeConfig: {
        nav,
        sidebar,
        footer
    },
    markdown:{
        config:(md)=>{
            // md.use(demoBlockPlugin)
            md.use(demoblock)
        }

    }
}