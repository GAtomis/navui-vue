
<template>

  <div class="container">
    <NavGlowButton>BLUE</NavGlowButton>
    <NavGlowButton color="#e2201b">RED</NavGlowButton>
    <NavGlowButton color="#21e21b">GREEN</NavGlowButton>


  </div>

</template>
<script lang="ts" setup>
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