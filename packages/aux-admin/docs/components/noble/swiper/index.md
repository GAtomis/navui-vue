
# Swiper 轮播
商品轮播图,基于Swiperjs开发
:::tip
项目中的皆为本地使用路径,自己项目使用请根据[快速开始](/guide/quick-start/)中操作使用
:::
## 基本用法
根据轮播图的大小来控制轮播尺寸, 通过data传入轮播参数
<demo src="./demo-codes/demo.vue" key="1" ></demo>

## 更多配置
配置更多关于轮播的功能 [官方文档](https://swiperjs.com/swiper-api#param-pagination-enabled)

<demo src="./demo-codes/demo-more.vue" key="2" desc="配置官网文档https://swiperjs.com/swiper-api#navigation"></demo>

## 自动播放
自动播放轮播图,[官方文档](https://swiperjs.com/swiper-api#param-pagination-enabled)
<demo src="./demo-codes/demo-autoplay.vue" desc="配置官网文档https://swiperjs.com/swiper-api#navigation"></demo>

## 使用插槽
内容可以进行插槽配置
<demo src="./demo-codes/demo-slot.vue" desc="配置官网文档https://swiperjs.com/swiper-api#navigation"></demo>

## Swiper 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
|  data    | Data[]  | [] | 轮播数组 |[基本用法](#基本用法)|
|  getOptions | GetOptions  |  (opt)=>opt   | 初始化数据配置 |   [更多配置](#更多配置)    |

## Swiper 事件
| 事件名 | 说明 | 参数 |
| :---- | :---- | :--------- |
| slide  |图片切换回调 swiper为轮播实例，index为当前图片索引  |(swiper,index)|
| beforeSlide  |图片切换前回调 swiper为轮播实例，index为当前图片索引  |(swiper,index)|
| next  |点击下一张回调 swiper为轮播实例，index为下一张图片索引  |(swiper,index)|
| prev  |点击上一张回调 swiper为轮播实例，index为上一张图片索引  |(swiper,index)|
| 更多  |可以通过[官网事件](https://swiperjs.com/swiper-api#events)追加在[getOptions](#swiper-参数)中创建事件响应|swiper|

## Swiper 插槽
| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
| default |SwiperItem |[使用插槽](#使用插槽)|

## SwiperItem 参数
| 参数名 | 类型 | 默认值 | 说明 | 跳转 Demo |
| :---- | :---- | :---- | :---- | :--------- |
|  src    | string | "" | 图片地址优先级低于插槽|[使用插槽](#使用插槽)|


## SwiperItem 事件
| 事件名 | 说明 | 参数 |
| :---- | :---- | :--------- |
| 暂无  |       |         |


## SwiperItem 插槽
| 插槽名 | 说明 | 跳转 Demo |
| :---- | :---- | :--------- |
| default |插入轮播内容 |[使用插槽](#使用插槽)|



## Swiper 类型定义
### SwiperData
```ts
type Data ={
  src:string
  title:string
  id:string
};
```
### SwiperOption
```ts
type GetOptions=(options:any)=>any;
```

## Swiper Bug&Fix
::: tip 已解决
    Q1 : 多页面展示轮播会出现配置冲突问题
    A1: 源码默认官方配置在多组件共同使用时会产生选择器冲突,已修复官方配置
    Q2 : 现在都是默认配置是否可以灵活的配置自己的轮播内容
    A2 : 在v0.0.2中已经加入了插槽化的配置

:::

::: warning 待改善
    * 配置简化 ✅
    * 插槽化 ✅
:::




