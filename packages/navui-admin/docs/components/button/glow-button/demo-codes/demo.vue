
<template>

  <div class="container">
    <NavGlowButton>Blue</NavGlowButton>
    <NavGlowButton color="#e2201b">Red</NavGlowButton>
    <NavGlowButton color="#21e21b">Green</NavGlowButton>


  </div>

</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import {GlowButton as NavGlowButton} from "../../../../../nav-ui/main"
</script>
<style scoped>


.container {
  background: #050801;
  height: 30vh;
  display: flex;
    justify-content: center;
    align-items: center;

}
</style>