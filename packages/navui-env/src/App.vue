<!--
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-01-16 23:00:02
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-16 10:56:15
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
     <HelloWorld></HelloWorld>
  </div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>
    <div>123333333</div>


  <d-tree-test :data="data"></d-tree-test>

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:800");

</style>
