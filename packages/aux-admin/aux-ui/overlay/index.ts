import type { App } from 'vue';
import Overlay from './src/overlay';

export * from './src/overlay-types';

export { Overlay };
const inBrowser = typeof window !== 'undefined';
export default {
  title: 'Overlay 遮照层',
  category: '通用',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(Overlay.name, Overlay);
  }
};
