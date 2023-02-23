
# Collapse 卡片
折叠板

:::tip
项目中的皆为本地使用路径,自己项目使用请根据[快速开始](/guide/quick-start/)中操作使用
:::
## 基本用法
折叠板
<demo src="./demo-codes/demo.vue" ></demo>

## 手风琴
永远只会打开一个拓展窗口
<demo src="./demo-codes/demo-accordion.vue" ></demo>

## 自定义内容
通过插槽来实现自定义内容
<demo src="./demo-codes/demo-custom.vue" ></demo>



## Collapse 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
| modelValue/v-model| Array<string|number>| []| 手风琴为string 默认模式Array| |           
| accordion| Boolean| false| 手风琴模式 默认单选展开| [手风琴](#手风琴)|           

## Collapse 事件
| 事件名 | 说明 | 参数 |
| :---- | :---- | :--------- |
| change  |当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array) | (activeNames: array (non-accordion mode) / string (accordion mode))|


## Collapse 插槽
| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
| default |任意内容 |可以随意写想要卡片内|



## Collapse Item 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
| name| string|  - |唯一标志符 | -|           
| title| string| -| 头部名称| -|   
|disabled|boolean|false|是否禁用|-|


## Collapse Item插槽
| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
| default |拓展内容 |-|
| title |头部标题 |-|

