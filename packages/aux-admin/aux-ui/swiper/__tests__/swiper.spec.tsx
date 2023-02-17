import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { Swiper } from '..';

describe('swiper', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('swiper init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <Swiper />;
        };
      },
    });

    // todo
  })
})
