
<template>
  <div class="container">
    <nav-gfg-button>Add</nav-gfg-button>
    <nav-gfg-button :disabled="true" :type="`danger`">Delete</nav-gfg-button>
    <nav-gfg-button :type="`success`">
      {{ words }}
    </nav-gfg-button>

  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import type { GfgButtonProps } from "../../../../../build/types/gfg-button"
import { GfgButton as NavGfgButton } from "../../../../../nav-ui/main"

const type = ref<GfgButtonProps['type']>("success")
const words = ref("So do i")
</script>
<style scoped>
.container {
  display: flex;
  perspective: 600px;
}
</style>