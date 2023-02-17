
<template>
  <div class="container">
    <AuxOverlay v-model="visible" @open="open" @close="close"></AuxOverlay>
    <aux-noble-button @click="handleClick"> 打开遮照</aux-noble-button>
  </div>
</template>
<script lang="ts" setup>
import {  ref } from 'vue';
import { NobleButton as AuxNobleButton ,Overlay as AuxOverlay} from "../../../../../aux-ui/main"
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