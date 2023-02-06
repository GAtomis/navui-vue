# TreeTest 树测试

// todo 组件描述

#### 何时使用

// todo 使用场景描述

### 基本用法


:::demo // todo 基本用法描述

```vue
<template>
  <d-tree-test :data="data"></d-tree-test>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
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

    return {
      data
    }
  }
})
</script>

```

:::


### TreeTest 参数

| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
|      |   `string`   |      |      |     [基本用法](#基本用法)      |
|      |   [IXxx](#ixxx)   |      |      |           |
|      |      |      |      |           |

### TreeTest 事件

| 事件名 | 回调参数 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :--------- |
|      |      |      |           |
|      |      |      |           |
|      |      |      |           |

### TreeTest 插槽

| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
|   default   |      |           |
|      |      |           |
|      |      |           |

### TreeTest 类型定义

#### IXxx

```ts
interface IXxx {
  xxx: string;
}
```

