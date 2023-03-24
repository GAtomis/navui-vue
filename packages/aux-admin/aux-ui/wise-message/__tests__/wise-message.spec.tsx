import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { WiseMessage } from '..';

describe('wise-message', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('wise-message init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <WiseMessage />;
        };
      },
    });

    // todo
  })
})
