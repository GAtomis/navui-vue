import type { App } from 'vue';
import NobleCard from './src/noble-card';

export * from './src/noble-card-types';

export { NobleCard };

export default {
  title: 'NobleCard 商品卡片',
  category: '通用',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(NobleCard.name, NobleCard);
  }
};
