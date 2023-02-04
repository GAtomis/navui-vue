import { defineComponent, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { treeTestProps, TreeTestProps } from './tree-test-types';
import './tree-test.scss';
import OpenIcon from './components/OpenIcon';
import CloseIcon from './components/CloseIcon';
import useToggle from './hooks/use-toggle'
type ArrayType<T extends any[]> = T extends Array<infer R> ? R : never;

export default defineComponent({
  name: 'DTreeTest',
  props: treeTestProps,
  emits: [],
  setup(props: TreeTestProps, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);

    const { openedTree,
      openedData,
      toggle } = useToggle(props.data);


    const Indent = () => <span style="display:inline-block; width:16px;"></span>
    const renderNode = (item: ArrayType<TreeTestProps['data']>) => (
      <>
        <div onClick={() => {
          item?.children && toggle(item);
        }} style={{ paddingLeft: `${20 * ((item?.level ?? 1) - 1)}px` }}>
          {
            item.children
              ? (item.open
                ? <OpenIcon />
                : <CloseIcon />)
              : <Indent />
          }
          <span style="vertical-align: middle;">{item.label}</span>
        </div>
      </>
    );
    const renderTree = (treeData: TreeTestProps['data']) => {
      // 消除代码坏道

      return treeData.map(item => renderNode(item));
      // return treeData.map(item => {
      //   if (item.children) {
      //     return (<>{renderNode(item)}
      //       {renderTree(item.children)}
      //     </>);
      //   }
      //   return (renderNode(item));

      // });
    };


    // console.log(openedData); 
    return () => (<div class="devui-tree-test">   {renderTree(openedData.value)}</div>);
  }
});
