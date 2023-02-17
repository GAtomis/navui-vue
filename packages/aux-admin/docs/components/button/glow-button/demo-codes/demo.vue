
<template>

  <div class="container">
    <AuxGlowButton>BLUE</AuxGlowButton>
    <AuxGlowButton color="#e2201b">RED</AuxGlowButton>
    <AuxGlowButton color="#21e21b">GREEN</AuxGlowButton>


  </div>

</template>
<script lang="ts" setup>
import {GlowButton as AuxGlowButton} from "../../../../../aux-ui/main"
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