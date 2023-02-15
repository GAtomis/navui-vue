
<template>
  <div class="container">
    <nav-drawer :position="position" v-model="visible">
      <span>加入购物</span>
    </nav-drawer>
    <nav-noble-button @click="(e)=>handleClick(e,'top')"> 上</nav-noble-button>
    <nav-noble-button @click="(e)=>handleClick(e,'right')"> 右</nav-noble-button>
    <nav-noble-button> 下</nav-noble-button>
    <nav-noble-button> 左</nav-noble-button>
    

  </div>
</template>
<script lang="ts" setup>
import {  ref } from 'vue';
import {  Drawer as NavDrawer,NobleButton as NavNobleButton } from "../../../../../nav-ui/main"
import type {DrawerProps} from  "../../../../../nav-ui/drawer/index"
 const visible=ref(false)
 const position= ref<DrawerProps['position']>('right')
 const handleClick=(e:MouseEvent,key:DrawerProps['position'])=>{
  console.log(key);
  
    position.value=key
    visible.value=true
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