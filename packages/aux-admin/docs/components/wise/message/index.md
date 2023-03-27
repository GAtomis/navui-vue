
# Message 消息提示
wise风格消息提醒
:::tip
项目中的皆为本地使用路径,自己项目使用请根据[快速开始](/guide/quick-start/)中操作使用
:::
## 基本用法
nav上很炫酷的按钮 目前只有这三种颜色根据类型type去选择需要的颜色

<demo src="./demo-codes/demo.vue" desc="通过 type 改变按钮的颜色,支持各种原生属性"></demo>

## 带Icon按钮
通过插槽来加入icon实现带icon的按钮
<demo src="./demo-codes/demo-slot.vue" desc="通过icon的插槽实现"></demo>

## GfgButton 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
|  type    | `primary success danger`   |   primary   |   三种标签代表三种颜色状态   |     [基本用法](#基本用法)      |


## GfgButton 插槽

| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
|   default   |  任意内容  | [基本用法](#基本用法)   |
|   icon   |  组件内图标插槽  | [基本用法](#基本用法)   |





