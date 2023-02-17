import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { NobleButton } from '..';

describe('noble-button', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('noble-button init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <NobleButton />;
        };
      },
    });

    // todo
  })
})
