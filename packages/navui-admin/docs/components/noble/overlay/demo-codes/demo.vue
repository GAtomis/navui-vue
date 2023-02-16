
<template>
  <div class="container">
    <NavOverlay v-model="visible" @open="open" @close="close"></NavOverlay>
    <nav-noble-button @click="handleClick"> 打开遮照</nav-noble-button>
  </div>
</template>
<script lang="ts" setup>
import {  ref } from 'vue';
import { NobleButton as NavNobleButton ,Overlay as NavOverlay} from "../../../../../nav-ui/main"
 const visible=ref(false)
 const handleClick=(e:MouseEvent)=>{
    visible.value=true
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