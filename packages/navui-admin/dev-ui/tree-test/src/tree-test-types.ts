import type { PropType, ExtractPropTypes } from 'vue';


type TreeData =Array<{
  label: string;
  children?: TreeData;
  level?: number;
  open?: boolean;
}>;
export const treeTestProps = {
  data: {
    type: Array as PropType<TreeData>,
    default: [],
    required:true
  },
} as const;

export type TreeTestProps = ExtractPropTypes<typeof treeTestProps>;
