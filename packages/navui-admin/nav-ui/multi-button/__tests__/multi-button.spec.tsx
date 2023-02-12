import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { MultiButton } from '..';

describe('multi-button', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('multi-button init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return<></>;
        };
      },
    });
    console.log(wrapper.element);
    
    // todo
    expect(wrapper.classes()).toContain('navui-multi-button');
    expect(wrapper.element.childElementCount).toBe(10);
  })
  
})
 