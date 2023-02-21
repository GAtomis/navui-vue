import type { App } from 'vue';
import NobleCollapse from './src/noble-collapse';
import NobleCollapseItem from './src/noble-collapse-item';

export * from './src/noble-collapse-types';

export { NobleCollapse,NobleCollapseItem };

export default {
  title: 'NobleCollapse 奢侈风折叠面板',
  category: 'LV Style',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(NobleCollapse.name, NobleCollapse);
    app.component(NobleCollapseItem.name, NobleCollapseItem);
  }
};


