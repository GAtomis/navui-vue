
<template>
  <div class="container">
    <aux-gfg-button @click="handleClick('warn')">警告</aux-gfg-button>
    <aux-gfg-button :disabled="true" :type="`danger`">弹窗</aux-gfg-button>
    <aux-gfg-button :type="`success`">
      成功
    </aux-gfg-button>

  </div>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

import { GfgButton as AuxGfgButton ,WiseMessage} from "../../../../../aux-ui/main"
const handleClick=(type:string)=>{
  console.log(12323);
  
  WiseMessage.success("addd")
}

</script>
<style scoped>
.container {
  display: flex;
  perspective: 600px;
}
</style>