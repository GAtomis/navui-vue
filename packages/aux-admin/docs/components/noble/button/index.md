
# Button 按钮
:::tip
项目中的皆为本地使用路径,自己项目使用请根据[快速开始](/guide/quick-start/)中操作使用
:::
## 基本用法
展示基本lv风格的按钮 包含了禁止状态,是否充填
<demo src="./demo-codes/demo.vue" desc="基本样式按钮"></demo>
## 多种样式按钮
实现圆形按钮，icon按钮
<demo src="./demo-codes/demo-round.vue" desc="通过传入参数改变按钮形状"></demo>

## 带下划线的按钮
通过underline加入下划线
<demo src="./demo-codes/demo-underline.vue" desc="通过underline加入下划线"></demo>

## 自定义颜色按钮
改变color属性
<demo src="./demo-codes/demo-color.vue" desc="改变color属性"></demo>

## Button 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
|  type    |"primary"|"success"|"confirm"; |   -   |  更新于v0.0.1-alpha.2   | [基本用法](#基本用法)|
|  round    | Boolean  |   false   |   倒圆角边   | [多种样式按钮](#多种样式按钮)      |
|  circle    | Boolean  |   false   |   圆形   |     [多种样式按钮](#多种样式按钮)      |
|  underline    | Boolean  |   false   |   下划线按钮   |[带下划线的按钮](#带下划线的按钮)      |
|  color    | string  |   #fff   |   颜色支持rgb,16进制   | [自定义颜色按钮](#自定义颜色按钮)      |
|  disabled    | Boolean  |   false   |  是否禁用 |[基本用法](#基本用法)|
## Button 插槽
| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
|   default   |  任意内容  | [基本用法](#基本用法)   |





