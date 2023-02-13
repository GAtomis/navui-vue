import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { Overlay } from '..';

describe('overlay', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('overlay init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <Overlay />;
        };
      },
    });

    // todo
  })
})
