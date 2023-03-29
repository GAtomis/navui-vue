
<template>
  <div class="container">
    <aux-drawer :position="position" v-model="visible" :with-header="false" :close-mode="`none`" :is-overlay="false" style="background-color:rgb(0, 0, 0,0.3);backdrop-filter: blur(5px);">
      <span>加入购物</span>
      <button @click="()=>visible=false"> 关闭</button>
    </aux-drawer>

    <aux-noble-button @click="(e)=>handleClick(e,'right')"> 膜玻璃效果</aux-noble-button>
 

  </div>
</template>
<script lang="ts" setup>
import {  ref } from 'vue';
import {  Drawer as AuxDrawer,NobleButton as AuxNobleButton } from "../../../../../aux-ui/main"
import type {DrawerProps} from  "../../../../../aux-ui/drawer/index"
 const visible=ref(false)
 const position= ref<DrawerProps['position']>('right')
 const handleClick=(e:MouseEvent,key:DrawerProps['position'])=>{
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