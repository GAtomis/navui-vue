
<template>
  <div class="container">
    <aux-noble-collapse v-model="active" >
      <aux-noble-collapse-item title="系列" name="1">
      </aux-noble-collapse-item>
      <aux-noble-collapse-item title="类别" name="2">
      </aux-noble-collapse-item>
      <aux-noble-collapse-item title="材质" name="3">
      </aux-noble-collapse-item>
    </aux-noble-collapse>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { NobleCollapse as AuxNobleCollapse, NobleCollapseItem as AuxNobleCollapseItem } from "../../../../../aux-ui/main"
const active = ref([1])
</script>
<style scoped>
.container {
  /* height: 400px; */
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* perspective: 600px; */
  /* background-color: #813705; */
}
</style>