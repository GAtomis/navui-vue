
# 快速开始
本次内容是基于上一章包管理工具安装后来进行使用。
## 用法
分以下两种用法使用aux-ui组件

## 完整引入
> 完整引入后,所有组件都会自动注册到项目中,不用像手动按需加载,去注册模块使用
```
import { createApp } from 'vue'
import App from './App.vue'
import ui from "aux-ui"/组件
import "aux-ui/build/style.css" //组件样式
createApp(App).use(ui).mount('#app')//挂在组件

main.js

```

## 组件手动按需加载
::: tip
在vue3.2中SFC语法定义setup标签中加载组件
:::
```
<template>
  <div class="container">
    <aux-noble-button>button</aux-noble-button>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import {AuxNobleButton} from 'aux-ui'
</script>
<style scoped>
</style>
```
::: tip
在vue3 setup函数使用组件
:::

```
<template>
  <div class="container">
    <aux-noble-button>button</aux-noble-button>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import {AuxNobleButton} from 'aux-ui'

export default defineComponent({
    components:{
    AuxNobleButton:AuxNobleButton
    }
    setup() {
     return {
      position: ref(['bottom-start', 'top-start']),
    };
  },
});
</script>

```

## [跳转到组件](/components/noble/button/)


