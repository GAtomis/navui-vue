import { defineComponent, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { wiseNotificationProps, WiseNotificationProps } from './wise-notification-types';
import './wise-notification.scss';

export default defineComponent({
  name: 'AuxWiseNotification',
  props: wiseNotificationProps,
  emits: [],
  setup(props: WiseNotificationProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);

    return () => {
      return (
        <div class="aux-wise-notification"></div>
      );
    };
  }
});