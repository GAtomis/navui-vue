import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { GlowButton } from '..';

describe('glow-button', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('glow-button init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return<></>;
        };
      },
    });
    console.log(wrapper.element);
    
    // todo
    expect(wrapper.classes()).toContain('aux-glow-button');
    expect(wrapper.element.childElementCount).toBe(10);
  })
  
})
 