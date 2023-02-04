import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { gfgButton } from '..';

describe('gfg-button', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('gfg-button init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <gfgButton data={[
            {
              label: '1-0',
              level: 1,
              children: [{
                label: '1-0-0',
                level: 2,
                children: [{
                  label: '1-0-0-1',
                  level: 3,
                }] 

              },
              {
                label: '1-0-1',
                level: 2

              },
              {
                label: '1-0-2',
                level: 2

              },

              ]

            },
            {
              label: '1-1',
              level: 1,
              children: [{
                label: '1-1-0',
                level: 2,
                children: [{

                  label: '1-1-0-1',
                  level: 3,
                }]

              },
              {
                label: '1-1-1',
                level: 2

              },
              {
                label: '1-1-2',
                level: 2

              },

              ]

            }



          ]} />;
        };
      },
    });
    console.log(wrapper.element);
    
    // todo
    expect(wrapper.classes()).toContain('devui-gfg-button');
    expect(wrapper.element.childElementCount).toBe(10);
  })
  
})
 