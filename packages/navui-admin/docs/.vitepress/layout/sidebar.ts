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
                    ]
                },
                {
                    text: "button-group",
                    collapsible: true,
                    items: [
                        { text: 'MultiButton', link: '/components/button-group/multi-button/' }, // /guide/index.md
                        
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