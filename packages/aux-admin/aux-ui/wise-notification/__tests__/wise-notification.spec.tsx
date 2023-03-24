import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { WiseNotification } from '..';

describe('wise-notification', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('wise-notification init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <WiseNotification />;
        };
      },
    });

    // todo
  })
})
