
const navBar = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '文档',
    activeMatch: `^/guide`,
    link: "/guide/introduction/"
  },
  {
    text: '组件',
    activeMatch: `^/components/`,
    link: '/components/button/gfg-button/'
  },
  { text: "🔗 Github", link: "https://github.com/GAtomis/navui-vue" },
]
export default navBar