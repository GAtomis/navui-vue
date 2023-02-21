import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { NobleCollapse } from '..';

describe('noble-collapse', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('noble-collapse init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <NobleCollapse />;
        };
      },
    });

    // todo
  })
})
