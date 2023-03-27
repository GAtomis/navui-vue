import type { App } from 'vue';
import Message from './src/wise-message-service';

export * from './src/wise-message-types';

export { Message };

export default {
  title: 'WiseMessage 万设消息弹出框',
  category: '通用',
  status: '100%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.config.globalProperties.$message = Message;
  }
};
