import {ref} from 'vue'
import type {  TreeTestProps } from '../tree-test-types';
type ArrayType<T extends any[]> = T extends Array<infer R> ? R : never;

export default function (data:TreeTestProps['data']) {
  const openedTree = (tree: TreeTestProps['data']) => {
    return tree.reduce<any>(
      (acc, item) =>
        item?.open
          ?
          acc.concat(item, openedTree(item?.children??[]))
          : acc.concat(item), []);
  };
  const openedData=ref<TreeTestProps['data']>(openedTree(data));
  const toggle = (item: ArrayType<TreeTestProps['data']>) => {
    console.log("toggle", item);
    item.open = !item.open;
    openedData.value = openedTree(data);
  };

  return {
    openedTree,
    openedData,
    toggle
  };


}
