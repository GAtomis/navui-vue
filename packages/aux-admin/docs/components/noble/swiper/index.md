
# Swiper 遮照
商品轮播图,基于Swiperjs开发

## 基本用法
根据轮播图的大小来控制轮播尺寸, 通过data传入轮播参数
<demo src="./demo-codes/demo.vue" key="1" ></demo>


## 更多配置
配置更多关于轮播的功能 [官方文档](https://swiperjs.com/swiper-api#param-pagination-enabled)

<demo src="./demo-codes/demo-more.vue" key="2" desc="配置官网文档https://swiperjs.com/swiper-api#navigation"></demo>

## 自动播放
自动播放轮播图,[官方文档](https://swiperjs.com/swiper-api#param-pagination-enabled)
<demo src="./demo-codes/demo-autoplay.vue" desc="配置官网文档https://swiperjs.com/swiper-api#navigation"></demo>

## Swiper 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
|  v-model    | Boolean  |   false   |   是否显示   |[基本用法](#基本用法)|           |
|  zIndex   | string  |   1400   |   显示层级默认即可   |       |

## Swiper 事件
| 事件名 | 说明 | 参数 |
| :---- | :---- | :--------- |
| close  |关闭回掉 |无|
| open |打开回掉 |无|

## Swiper 插槽
| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
| default |任意内容 |可以随意写想要的弹窗|



## Swiper Bug&Fix
::: tip 已解决
    Q1 : 多页面展示轮播会出现配置冲突问题
    A: 源码默认官方配置在多组件共同使用时会产生选择器冲突,已修复官方配置
:::

::: warning 待改善
    * 配置简化
    * 插槽化
:::





