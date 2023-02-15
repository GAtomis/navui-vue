
<template>

  <div class="container">

    <div>
      <NavDrawer zIndex="1400" v-model="vis" position="left">
        <nav-gfg-button @click="handleClose">关闭抽屉</nav-gfg-button>
      </NavDrawer>
      <NavOverlay @click="close" :visible="visible"></NavOverlay>
      <nav-gfg-button @click="handleOpen">开启抽屉</nav-gfg-button>

      <nav-gfg-button @click="handleOverlay">打开遮照</nav-gfg-button>
      <nav-noble-button></nav-noble-button>
    </div>


  </div>

</template>
<script lang="ts" setup>
import { ref } from 'vue';
const visible = ref(false)

const close = (e: any) => {
  console.log(e);
  visible.value = false

}
const handleOverlay = () => {
  visible.value = true

}


const vis = ref(false)
const handleOpen = () => {
  vis.value = true

}
const handleClose = () => {
  vis.value = false
}


</script>
<style scoped>
@import url(//at.alicdn.com/t/c/font_3882013_ongjfg9mkdo.css);

.container {
  min-height: 600px;
  /* display: flex; */

}
</style>