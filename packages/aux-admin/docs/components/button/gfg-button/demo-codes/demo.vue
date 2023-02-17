
<template>
  <div class="container">
    <aux-gfg-button>Add</aux-gfg-button>
    <aux-gfg-button :disabled="true" :type="`danger`">Delete</aux-gfg-button>
    <aux-gfg-button :type="`success`">
      {{ words }}
    </aux-gfg-button>

  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import type { GfgButtonProps } from "../../../../../build/types/gfg-button"
import { GfgButton as AuxGfgButton } from "../../../../../aux-ui/main"

const type = ref<GfgButtonProps['type']>("success")
const words = ref("So do i")
</script>
<style scoped>
.container {
  display: flex;
  perspective: 600px;
}
</style>