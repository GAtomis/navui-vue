
# Drawer 抽屉
官网上用了很多抽屉的功能这里直接封装了一个抽屉直接调用api使用
:::tip
项目中的皆为本地使用路径,自己项目使用请根据[快速开始](/guide/quick-start/)中操作使用
:::
## 基本用法
点击按钮打开Drawer
<demo src="./demo-codes/demo.vue" ></demo>

## 自定义内容
通过with-header属性控制是否显示标题
<demo src="./demo-codes/demo-custom.vue" desc="通过title属性或者插槽控制title内容"></demo>

## 自定义样式
通过透传属性改变样式,修改closeMode可以取消点击外部关闭抽屉的事件
<demo src="./demo-codes/demo-style.vue" desc="通过透传属性改变样式,修改closeMode可以取消点击外部关闭抽屉的事件"></demo>

## Drawer 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
|  v-model    | Boolean  |   false   |   是否显示   |[基本用法](#基本用法)|
|  size    | string  |   30%   |   样式大小   |                 |
|  zIndex   | string  |   1400   |   显示层级默认即可   |       |
|  title   | string  |   空   |   标题内容   |[自定义内容](#自定义内容)|
|  withHeader   | Boolean  |   true   |   是否显示头标签  |[基本用法](#基本用法)|
|  position   | string  |   right  |   抽屉方向  |[基本用法](#基本用法)|
|  isOverlay   | Boolean  |   true  |  是否打开遮照  |[自定义样式](#自定义样式)|
|  closeMode   | none&outside as string |   outside   |  关闭模式 |[自定义样式](#自定义样式)|


## Drawer 事件
| 事件名 | 说明 | 参数 |
| :---- | :---- | :--------- |
| close  |关闭回掉 |无|
| open |打开回掉 |无|

## Drawer 插槽
| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
| default |任意内容 |[基本用法](#基本用法)|
| title |标题 |[自定义内容](#自定义内容)|





