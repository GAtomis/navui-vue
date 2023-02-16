
<template>
  <div class="container">
    <nav-drawer :position="position" title="打开菜单" v-model="right">
      <span>加入购物</span>
    </nav-drawer>
    <nav-drawer :position="`left`" title="打开菜单" v-model="left" @close="close" @open="open">
      <span>加入购物</span>
      <template #title >
          插槽加入
      </template>
    </nav-drawer>
    <nav-noble-button @click="(e)=>handleClick(e,'right')"> 打开菜单</nav-noble-button>
    <nav-noble-button @click="handleRight"> 插槽加入</nav-noble-button>
  </div>
</template>
<script lang="ts" setup>
import {  ref } from 'vue';
import {  Drawer as NavDrawer,NobleButton as NavNobleButton ,Overlay} from "../../../../../nav-ui/main"
import type {DrawerProps} from  "../../../../../nav-ui/drawer/index"
 const left=ref(false)
 const right=ref(false)
 const position= ref<DrawerProps['position']>('right')
 const handleClick=(e:MouseEvent,key:DrawerProps['position'])=>{
    position.value=key
    right.value=true
 }
 const handleRight=()=>{
    left.value=true
 }
 const close=()=>{
  console.log("关闭");
  
 }
 const open =()=>{
  console.log("开启");
  
 }
</script>
<style scoped>
.container {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 600px;
  background-color: #813705;
}
</style>