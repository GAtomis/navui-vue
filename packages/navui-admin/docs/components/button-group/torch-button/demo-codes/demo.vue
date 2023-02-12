
<template>

  <div class="container">
    <nav-torch-button >
      <button>
        <i class="iconfont icon-paperplane-fill"></i>
      </button>
      <button>
        <i class="iconfont icon-phone-fill"></i>
      </button>
      <button>
        <i class="iconfont icon-folder-fill"></i>
      </button>
    </nav-torch-button>
  </div>

</template>
<script lang="ts" setup>
import {  ref } from 'vue';

import {TorchButton as NavTorchButton} from "../../../../../nav-ui/main"

  const words= ref("Icon")
</script>
<style scoped>
@import url(https://at.alicdn.com/t/c/font_3882013_ongjfg9mkdo.css?spm=a313x.7781069.1998910419.52&file=font_3882013_ongjfg9mkdo.css);
.container {
  display: flex;
  perspective: 600px;
}
</style>