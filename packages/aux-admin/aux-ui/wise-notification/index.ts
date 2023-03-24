import type { App } from 'vue';
import WiseNotification from './src/wise-notification';

export * from './src/wise-notification-types';

export { WiseNotification };

export default {
  title: 'WiseNotification 通知',
  category: '通用',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(WiseNotification.name, WiseNotification);
  }
};
