
import type { App } from 'vue';
import GlowButton from './src/glow-button';

export * from './src/glow-button-types';

export { GlowButton };

export default {
  title: 'glow-button 按钮',
  category: '数据展示',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(GlowButton.name, GlowButton);
  }
};
