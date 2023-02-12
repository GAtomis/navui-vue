import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { MultiButtonGroup } from '..';

describe('multi-button-group', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('multi-button-group init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return<></>;
        };
      },
    });
    console.log(wrapper.element);
    
    // todo
    expect(wrapper.classes()).toContain('navui-multi-button-group');
    expect(wrapper.element.childElementCount).toBe(10);
  })
  
})
 