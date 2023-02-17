import type { App } from 'vue';
import NobleButton from './src/noble-button';

export * from './src/noble-button-types';

export { NobleButton };

export default {
  title: 'NobleButton 按钮',
  category: '通用',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(NobleButton.name, NobleButton);
  }
};
