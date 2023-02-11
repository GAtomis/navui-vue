const sidebar = {




    '/guide/': [
        {
            text:"开始",
            items:[
                { text: '简介', link: '/guide/introduction/' },
                { text: '快速开始', link: '/guide/quick-start/' },
            ]

        }

    ],
    '/components/': [
        {
            text: 'components',
            items: [
                // This shows `/guide/index.md` page.
                {
                    text: "button",
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'GfgButton', link: '/components/button/gfg-button/' }, // /guide/index.md
                        { text: 'GlowButton', link: '/components/button/glow-button/' }, // /guide/index.md
                        { text: 'Input', link: '/components/input/' }, // /guide/one.md
                        { text: 'TreeTest', link: '/components/tree-test/' }, // /guide/one.md
                    ]
                },
                {
                    text: "button-group",
                    collapsible: true,
                    items: [
                        { text: 'TorchButton', link: '/components/button-group/torch-button/' }, // /guide/index.md
                        
                    ]
                }
            ]
        },

    ],
    "/api/": [{
        text: "API"
    }]
}
export default sidebar