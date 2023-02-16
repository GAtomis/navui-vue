import type { App } from 'vue';
import Swiper from './src/swiper';

export * from './src/swiper-types';

export { Swiper };

export default {
  title: 'Swiper 轮播图',
  category: '导航',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(Swiper.name, Swiper);
  }
};
