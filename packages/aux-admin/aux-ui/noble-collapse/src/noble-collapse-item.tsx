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
      handleEnterClick,
      handleFocus,
      isActive,
      id,
      focusing,
      collapse
    } = useCollapseItem(props, ctx as SetupContext)
    const scopedExpandableId = computed(() => ns.e(`expandable-${unref(id)}`))
    const scopedHeaderId = computed(() => ns.e(`Header-${unref(id)}`))
    const handleKeypress = (e: any) => {
      if (e.key == 'Enter') {
        e.stopPropagation()
        handleEnterClick()
      }
    }
    const ExpandableIcon = globalIcon('icon-angle-up')
    return () => {
      return (
        <div
          class={
            {
              [ns.b()]: true,
              ['is-active']: isActive.value,
            }
          }
          role="tablist" aria-multiselectable="true">
          <section
            id={scopedHeaderId.value}
            class={{
              [ns.e("header")]: true,
              ['is-active']: isActive.value,
            }}
            role="button"
            tabindex={props.disabled ? -1 : 0}
            onClick={handleHeaderClick}
            onFocus={handleFocus}
            onBlur={() => focusing.value = false}
            onKeypress={handleKeypress}
          >
            <span>
              {slots.value.title?.({
                props
              }) ?? props.title}
            </span>
            <i
              class={
                {
                  [ns.e("arrow")]: true,
                  ['is-active']: isActive.value,
                }
              }>
              <ExpandableIcon></ExpandableIcon>
            </i>
          </section>
          <AuxCollapseTransition >
            {
              isActive.value && <section
                id={scopedExpandableId.value}
                style={{
                  // display: isActive.value ? '' : 'none'
                }}
                role="tabpanel"
                class={{
                  [ns.e("expandable")]: true,
                  ['is-active']: isActive.value,
                }}>

                {ctx.slots.default?.() ?? "Expand content"}
              </section>
            }
          </AuxCollapseTransition>
        </div >
      );
    };
  }
});