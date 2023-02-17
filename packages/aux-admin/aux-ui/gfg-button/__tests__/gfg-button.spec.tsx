import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { GfgButton } from '..';

describe('gfg-button', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('gfg-button init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return<></>;
        };
      },
    });
    console.log(wrapper.element);
    
    // todo
    expect(wrapper.classes()).toContain('aux-gfg-button');
    expect(wrapper.element.childElementCount).toBe(10);
  })
  
})
 