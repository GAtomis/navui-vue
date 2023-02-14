


## [文档地址](https://gatomis.github.io/navui-vue-docs/components/button/gfg-button/)
## 组件库搭建教学
### 配置tsconfig
查看tsconfig文件修改相关配置

#### 加入tsx支持
vite本事支持tsx组件编写 但是vue编译过程中是无法通过模版整合到vue中去编译渲染，于是我们引入插件
```
yarn add -D @vitejs/plugin-vue-jsx
```
#### 配置TSX支持
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import setupJSX from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),setupJSX()],
})

```

### 建立vitepress文档

#### 安装vitepress

```
yarn add -D vitepress
```
#### 创建第一个文档
```
    mkdir docs && echo `# Hello VitePress` > docs/index.md 
```

#### 配置文档启动命令
```
  "scripts": {
    "docs:dev":"vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
```
#### 启动文档

```
pnpm run  docs:dev
```

#### 

### Config配置
[更多内容(官方文档)](https://vitepress.vuejs.org/guide/theme-sidebar)

####  侧边栏
```
const sidebar =()=>({
    '/': [
        {
            text: 'Components',
            items: [
                // This shows `/guide/index.md` page.
                { text: 'Button', link: '/components/button/' }, // /guide/index.md
                { text: 'Input', link: '/components/input/' }, // /guide/one.md

            ]
        },

    ]
})

```
#### 安装代码收起展示功能
```
pnpm  i -D  vitepress-theme-demoblock

```
#### 从md中配置插件
```
// /docs/.vitepress/config.ts
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
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
```
#### 将收齐组件加入到vitepress中
```
// /docs/.vitepress/theme/index.ts


import DefaultTheme from 'vitepress/theme'
import Button from '../../../dev-ui/button/button'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'


export default {
    ...DefaultTheme,
    enhanceApp(ctx){
        const {app}=ctx
        app.component("d-button",Button)
        DefaultTheme.enhanceApp(ctx)
        app.component("Demo",Demo)
        app.component("DemoBlock",DemoBlock)
    }

 
}

```
#### 在文档中使用
```
:::demo 
```vue  
<template>
    <div>12323</div>
    <d-button></d-button>
</template>
/```
:::



```


### CIL的创建

#### 初始化cli
* commander 创建命令
* inquirer 脚本问答交互
* fs-extra 文件系统操作的封装
* kolorist 提示文字颜色变换


```  
 pnpm i -D commander inquirer fs-extra kolorist

```

npx的意义
npm2.0后携带的工具，执行node_modules下的命令



### 打包配置

> 文件目录 dev-cli/src/commands/build.js
拓展

> 按需打包 dev-cli/src/commands/demand-loading.js



