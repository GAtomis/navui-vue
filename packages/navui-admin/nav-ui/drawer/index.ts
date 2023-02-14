import type { App } from 'vue';
import Drawer from './src/drawer';

export * from './src/drawer-types';

export { Drawer };

export default {
  title: 'Drawer 抽屉',
  category: '通用',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(Drawer.name, Drawer);
  }
};
