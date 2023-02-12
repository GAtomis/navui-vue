
<template>

  <div class="container">
    <nav-multi-button-group >
      <nav-multi-button > A</nav-multi-button>
      <nav-multi-button> B</nav-multi-button>
      <nav-multi-button> C</nav-multi-button>
      <nav-multi-button> D</nav-multi-button>
    </nav-multi-button-group>

  </div>

</template>
<script lang="ts" setup>
import {  ref } from 'vue';

import {MultiButton as NavMultiButton,MultiButtonGroup as NavMultiButtonGroup} from "../../../../../nav-ui/main"

</script>
<style scoped>
@import url(https://at.alicdn.com/t/c/font_3882013_ongjfg9mkdo.css?spm=a313x.7781069.1998910419.52&file=font_3882013_ongjfg9mkdo.css);
.container {
  display: flex;
  perspective: 600px;
}
</style>