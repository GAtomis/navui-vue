
<template>

  <div class="container">
    <nav-torch-button >
    </nav-torch-button>
  </div>

</template>
<script lang="ts" setup>
import {  ref } from 'vue';

import {TorchButton as NavTorchButton} from "../../../../../nav-ui/main"

  const words= ref("Icon")
</script>
<style scoped>

.container {
  display: flex;
  perspective: 600px;
}
</style>