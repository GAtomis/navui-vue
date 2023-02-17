import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { Drawer } from '..';

describe('drawer', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('drawer init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <Drawer />;
        };
      },
    });

    // todo
  })
})
