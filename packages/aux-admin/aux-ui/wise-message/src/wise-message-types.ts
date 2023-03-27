import type { PropType, ExtractPropTypes } from 'vue';
export type MessageType = 'normal' | 'success' | 'error' | 'warning' | 'info';
export const wiseMessageProps = {
  id: {
    type: String,
    default: '',
  },
  // 是否显示
  visible: {
    type: Boolean,
    default: false,
  },
  // 消息内容
  message: {
    type: String,
    default: '',
  },
  // 提示类型
  type: {
    type: String as PropType<MessageType>,
    default: 'normal',
  },
  // 是否展示边框
  bordered: {
    type: Boolean,
    default: true,
  },
  // 是否展示阴影
  shadow: {
    type: Boolean,
    default: true,
  },
  // 延迟时间
  duration: {
    type: Number,
    default: 3000,
  },
  // 展示可关闭按钮
  showClose: {
    type: Boolean,
    default: false,
  },
  // 关闭回调
  onClose: {
    type: Function as PropType<() => void>,
  },
} as const;

export type WiseMessageProps = ExtractPropTypes<typeof wiseMessageProps>;

export type EmitEventFn = (event: 'close' | 'destroy', result?: unknown) => void;


export type WiseMessageOption = Partial<WiseMessageProps> & { message?: string };

export type VoidFn = () => void;