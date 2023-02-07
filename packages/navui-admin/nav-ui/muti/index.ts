/*
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2023-02-04 19:55:49
 * @LastEditors: GAtomis
 * @LastEditTime: 2023-02-06 22:38:07
 * @Description: 按钮
 */
import type { App } from 'vue';
import TorchButton from './src/torch-button';

export * from './src/torch-button-types';

export { TorchButton };

export default {
  title: 'torch-button 按钮',
  category: '数据展示',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    app.component(TorchButton.name, TorchButton);
  }
};
