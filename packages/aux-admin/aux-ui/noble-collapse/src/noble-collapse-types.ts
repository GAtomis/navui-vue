import type { PropType, ExtractPropTypes,Ref } from 'vue';
export type Model= string|number
export const nobleCollapseProps = {
  accordion: {
    type:Boolean,
    default: false
  },
  modelValue:{
    type:Array as PropType<Model[]>,
    default:['0'],
    required:true

  }
} as const;

export type NobleCollapseProps = ExtractPropTypes<typeof nobleCollapseProps>;


export const nobleCollapseItemProps = {
  name:{
    type:String,
    required:true
  },
  title:String,
  disabled:Boolean
} as const;

export type NobleCollapseItemProps = ExtractPropTypes<typeof nobleCollapseItemProps>;

//Symbal
export interface NobleCollapseContext {
  activeNames: Ref<Model[]>
  handleItemClick: (name: Model) => void
}