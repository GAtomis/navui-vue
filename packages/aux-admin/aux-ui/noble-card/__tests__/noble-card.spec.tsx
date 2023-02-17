import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { NobleCard } from '..';

describe('noble-card', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('noble-card init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <NobleCard />;
        };
      },
    });

    // todo
  })
})
