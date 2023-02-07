import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { TorchButton } from '..';

describe('torch-button', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('torch-button init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return<></>;
        };
      },
    });
    console.log(wrapper.element);
    
    // todo
    expect(wrapper.classes()).toContain('devui-torch-button');
    expect(wrapper.element.childElementCount).toBe(10);
  })
  
})
 