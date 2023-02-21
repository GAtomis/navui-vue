import { defineComponent, toRefs, SetupContext, computed, unref } from 'vue';
import { nobleCollapseItemProps, NobleCollapseItemProps } from './noble-collapse-types';
import './noble-collapse.scss';
import { useNamespace } from '../../shared/hooks/use-namespace'
import globalIcon from '../../shared/components/global-icon'
import { CollapseTransition as AuxCollapseTransition } from '../../main'
import { useCollapseItem } from './hooks/use-collapse-item'
export default defineComponent({
  name: 'AuxNobleCollapseItem',
  props: nobleCollapseItemProps,
  emits: [],
  setup(props, ctx) {

    const { slots } = toRefs(ctx)
    const ns = useNamespace('noble-collapse-item')
    const {
      handleHeaderClick,
      handleFocus,
      isActive,
      id,
      isClick,
      focusing,
      collapse
    } = useCollapseItem(props, ctx as SetupContext)

    const scopedExpandableId = computed(() => ns.e(`expandable-${unref(id)}`))
    const scopedHeaderId = computed(() => ns.e(`Header-${unref(id)}`))
    const onKey = (e: KeyboardEvent) => {
      console.log(e);

    }

    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);

    const RightIcon = globalIcon('icon-angle-right')
    return () => {
      return (
        <div class={
          {
            [ns.b()]: true,
            ['is-active']: isActive.value,
          }
        } role="tablist" aria-multiselectable="true">
          <section
            id={scopedHeaderId.value}
            class={{
              [ns.e("header")]: true,
              ['is-active']: isActive.value,
            }}
            onClick={handleHeaderClick}
            onFocus={handleFocus}

          >
            <span>
              {slots.value.title?.({
                props
              }) ?? props.title}
            </span>
            <i class={
              {
                [ns.e("arrow")]: true,
                ['is-active']: isActive.value,
              }
            }>
              <RightIcon></RightIcon>
            </i>
          </section>

          <AuxCollapseTransition >
            {isActive.value && <section
              id={scopedExpandableId.value}
              style={{
                // display: isActive.value ? '' : 'none'
              }}
              role="tabpanel"
              class={{
                [ns.e("expandable")]: true,
                ['is-active']: isActive.value,
              }}>

                {ctx.slots.default?.()??"Expand content"}
            </section>}

          </AuxCollapseTransition>
        </div >
      );
    };
  }
});