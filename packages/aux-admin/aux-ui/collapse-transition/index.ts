import type { App } from 'vue';
import CollapseTransition from './src/collapse-transition';

export * from './src/collapse-transition-types';

export { CollapseTransition };

export default {
  title: 'CollapseTransition 折叠效果组件',
  category: 'LV Style',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(CollapseTransition.name, CollapseTransition);
  }
};
