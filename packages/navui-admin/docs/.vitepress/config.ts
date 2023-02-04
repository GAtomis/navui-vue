

import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar =()=>({
    '/': [
        {
            text: 'Components',
            items: [
                // This shows `/guide/index.md` page.
                { text: 'Button', link: '/components/button/' }, // /guide/index.md
                { text: 'Input', link: '/components/input/' }, // /guide/one.md
                { text: 'TreeTest', link: '/components/tree-test/' }, // /guide/one.md


            ]
        },

    ]
})



export default {
    themeConfig: {
        sidebar:sidebar()
    },
    markdown:{
        config:(md)=>{
    
            md.use(demoBlockPlugin)
        }

    }
}