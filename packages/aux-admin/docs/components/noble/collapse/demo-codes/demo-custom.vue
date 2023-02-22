
<template>
  <div class="container">
    <aux-noble-collapse v-model="active"  >
      <aux-noble-collapse-item title="系列" name="1">
        <template #title={props}>
          {{ `Lv男士${props.title}`}}
        </template>
        <div>
        男士个人定制
        </div>
      </aux-noble-collapse-item>
      <aux-noble-collapse-item title="Damier" name="2">
        Damier Stripes 长围巾为 Damier Stripes 图案浸染鲜明色彩，点缀源自品牌皮具系列的 Louis Vuitton Malletier 标签，为温暖时节带来轻盈之选。
      </aux-noble-collapse-item>
      <aux-noble-collapse-item title="头巾套装" name="3">
        本款头巾套装汇聚春季胶囊系列的 Damier Stripes、ColorBlocks 和 Zig Zag 图案，将 Monogram 图案和 LV 字母等元素巧妙融入，展现品牌经典的当季革新。
      </aux-noble-collapse-item>
    </aux-noble-collapse>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { NobleCollapse as AuxNobleCollapse, NobleCollapseItem as AuxNobleCollapseItem } from "../../../../../aux-ui/main"
const active = ref('1')
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