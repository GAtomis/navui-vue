
<template>

  <div class="container">
    <nav-gfg-button>Add</nav-gfg-button>
    <nav-gfg-button type="danger">Delete</nav-gfg-button>
    <nav-gfg-button type="success">
      <template #icon>
        <SearchOutlined/>
      </template>
      {{ words }}
    </nav-gfg-button>
  </div>

</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import type {} from "../../../../build/dev-ui"
 import {SearchOutlined} from '@ant-design/icons-vue'
  const words= ref<string>("Sear dasds说")
</script>
<style scoped>
.container {
  display: flex;
  perspective: 600px;
}
</style>