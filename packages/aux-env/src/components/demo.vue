
<template>
  <div class="container">
    <aux-noble-collapse v-model="active">
      <aux-noble-collapse-item name="1" title="what">
      </aux-noble-collapse-item>
      <aux-noble-collapse-item name="2" title="asds">
      </aux-noble-collapse-item>
    </aux-noble-collapse>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';


const active = ref(['1'])

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