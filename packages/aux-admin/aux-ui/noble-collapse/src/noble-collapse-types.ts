import type { PropType, ExtractPropTypes, Ref } from 'vue';
export type Model = string | number
export type Arrayable<T> = T | T[]

export const nobleCollapseProps = {
  accordion: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [Array,Number,String] as PropType<Arrayable<Model>> ,
    default: [],
    required: true

  }
} as const;

export type NobleCollapseProps = ExtractPropTypes<typeof nobleCollapseProps>;
export const nobleCollapseItemProps = {
  name: {
    type: String,
    required: true
  },
  title: String,
  disabled: {
    type: Boolean,
    default: false
  }
} as const;

export type NobleCollapseItemProps = ExtractPropTypes<typeof nobleCollapseItemProps>;

//Symbal
export interface NobleCollapseContext {
  activeNames: Ref<Model[]>
  handleItemClick: (name: Model) => void
}