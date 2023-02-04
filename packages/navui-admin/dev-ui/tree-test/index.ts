import type { App } from 'vue';
import TreeTest from './src/tree-test';

export * from './src/tree-test-types';

export { TreeTest };

export default {
  title: 'TreeTest 树测试',
  category: '数据展示',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(TreeTest.name, TreeTest);
  }
};
