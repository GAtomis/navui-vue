import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { TorchButtonGroup } from '..';

describe('torch-button-group', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('torch-button-group init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return<></>;
        };
      },
    });
    console.log(wrapper.element);
    
    // todo
    expect(wrapper.classes()).toContain('devui-torch-button-group');
    expect(wrapper.element.childElementCount).toBe(10);
  })
  
})
 