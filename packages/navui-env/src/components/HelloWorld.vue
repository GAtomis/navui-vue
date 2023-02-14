
<template>

  <div class="container">

    <div>1232</div>
    <NavDrawer zIndex="1400" v-model="vis" position="left">
      <nav-gfg-button @click="handle">关闭抽屉</nav-gfg-button>
    </NavDrawer>
    <nav-gfg-button @click="handleOpen">显示抽屉</nav-gfg-button>
  
  </div>

</template>
<script lang="ts" setup>
import {  ref } from 'vue';

const vis=ref(false)
const handleOpen=()=>{
   vis.value=true

}


</script>
<style scoped>
@import url(//at.alicdn.com/t/c/font_3882013_ongjfg9mkdo.css);
.container {
  min-height: 600px;
  /* display: flex; */

}
</style>