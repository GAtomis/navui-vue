
# MultiButton 
多种类按钮
:::tip
项目中的皆为本地使用路径,自己项目使用请根据[快速开始](/guide/quick-start/)中操作使用
:::
## 基本用法
通过默认插槽插入文字或者图片
<demo src="./demo-codes/demo.vue" desc="通过默认插槽插入文字或者图片"></demo>

## 带气泡提示
配合AuxMultiButton实现效果
<demo src="./demo-codes/demo-tooltip.vue" desc="可以通过tip属性或者使用tooltip插槽去加入提示"></demo>

## 选中状态颜色
通过active-color,hover-color属性选择对应颜色
<demo src="./demo-codes/demo-color.vue" desc="选择颜色支持rgb,十六进制"></demo>

## MultiButtonGroup API
### MultiButtonGroup 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
|  tooltip | boolean | false| 是否带有气泡提示 |[示例](#带气泡提示)|
|  activeColor | string | #d6d8e1 |按下按钮颜色状态|[示例](#选中状态颜色)|
|  hoverColor | string | #f0f1f4 | 悬浮按钮颜色状态 |[示例](#选中状态颜色)|
### MultiButtonGroup 插槽
| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
| default  | 任意内容 |[基本用法](#基本用法)|
## MultiButton API
### MultiButton 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
|  tooltip | boolean | false| 是否带有气泡提示 |[示例](#带气泡提示)|
|  tip | string | 'tips'|提示内容,必须tooltip为true时才能生效。 |[示例](#带气泡提示)|
### MultiButton 插槽
| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
| default  | 任意内容 | [示例](#带气泡提示) |
| tooltip  | 气泡内容 | [示例](#带气泡提示) |
