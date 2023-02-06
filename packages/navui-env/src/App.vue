<!--
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-06 21:42:22
 * @Description: 头部注释
-->
<script setup lang="ts">

import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import {SearchOutlined} from "@ant-design/icons-vue"
const data = ref([
      {
        label:'1-0',
        level:1,
        open:true,
        children:[{
          label:'1-0-0',
          level:2,
          open:!true,
          children:[{

              label:'1-0-0-1',
              level:3,
          }]
          
        },
        {
          label:'1-0-1',
          level:2
          
        },
        {
          label:'1-0-2',
          level:2
          
        },
        
        ]

      },
        {
        label:'1-1',
        level:1,
        open:true,
        children:[{
          label:'1-1-0',
          level:2,
         open:true,
          children:[{

              label:'1-1-0-1',
              level:3,
          }]
          
        },
        {
          label:'1-1-1',
          level:2
          
        },
        {
          label:'1-1-2',
          level:2
          
        },
        
        ]

      }



    ]);

    console.log(data);
    
</script>

<template>
  <div>
     
  </div>

  <nav-gfg-button>
    <template #icon><SearchOutlined/></template>
    
  </nav-gfg-button>

  <d-tree-test :data="data"></d-tree-test>

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:800");
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
