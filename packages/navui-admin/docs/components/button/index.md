<!--
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-05 04:36:59
 * @Description: 头部注释
-->
# 按钮


:::demo 
```vue  
<template>

<div class="container">
            <nav-gfg-button  >Add</nav-gfg-button >
              <nav-gfg-button type="danger" >Delete</nav-gfg-button >
               <nav-gfg-button type="success" >

             <SearchOutlined/>
               </nav-gfg-button >
        </div>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({

    setup() {
   
   
    return {
 
    }
  }
})
</script>
<style scoped>
.container{
  display:flex;
  perspective: 600px;
}
</style>

```
:::