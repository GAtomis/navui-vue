import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { CollapseTransition } from '..';

describe('collapse-transition', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('collapse-transition init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <CollapseTransition />;
        };
      },
    });

    // todo
  })
})
