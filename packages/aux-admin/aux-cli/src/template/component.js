
import { camelCase } from "lodash-es"
import { bigCamelCase } from "../shared/utils"
import {
  NAVUI_NAMESPACE,
  CSS_CLASS_PREFIX,
} from "../shared/constant"
// 创建组件模板
export const createComponentTemplate = ({ styleName, componentName, typesName }) => `\
import { defineComponent, toRefs } from 'vue';
import type { SetupContext } from 'vue';
import { ${camelCase(componentName)}Props, ${bigCamelCase(
  componentName
)}Props } from './${typesName}';
import './${styleName}.scss';

export default defineComponent({
  name: '${bigCamelCase(NAVUI_NAMESPACE)}${bigCamelCase(componentName)}',
  props: ${camelCase(componentName)}Props,
  emits: [],
  setup(props: ${bigCamelCase(componentName)}Props, ctx: SetupContext) {
    // 直接解构 props 会导致响应式失效，需要使用 toRefs 进行包裹
    // const { data } = toRefs(props);
    // console.log(data.value);

    return () => {
      return (
        <div class="${CSS_CLASS_PREFIX}-${componentName}"></div>
      );
    };
  }
});`;
// 创建类型声明模板
export const createTypesTemplate = ({ componentName }) => `\
import type { PropType, ExtractPropTypes } from 'vue';

export const ${camelCase(componentName)}Props = {
  // data: {
  //   type: type,
  //   default: defaultValue
  // },
} as const;

export type ${bigCamelCase(componentName)}Props = ExtractPropTypes<typeof ${camelCase(
  componentName
)}Props>;
`;



// 创建scss模板
export const createStyleTemplate = ({ componentName }) => `\
// 引入主题变量
@import '../../styles/global.scss';
.#{$globa-prefix}-${componentName} {
}
`;


// 创建index模板
export const createIndexTemplate = ({
  title,
  category,
  hasComponent,
  hasDirective,
  hasService,
  componentName,
  directiveName,
  serviceName
}) => {
  const importComponentStr = `\nimport ${bigCamelCase(componentName)} from './src/${componentName}';`;
  const importDirectiveStr = `\nimport ${bigCamelCase(directiveName)} from './src/${directiveName}';`;
  const importServiceStr = `\nimport ${bigCamelCase(serviceName)} from './src/${serviceName}';`;

  const installComponentStr = `app.component(${bigCamelCase(componentName)}.name, ${bigCamelCase(componentName)});`;
  const installDirectiveStr = `\n    app.directive('${bigCamelCase(componentName)}', ${bigCamelCase(
    directiveName
  )})`;
  const installServiceStr = `\n    app.config.globalProperties.$${camelCase(
    serviceName
  )} = ${bigCamelCase(serviceName)}`;

  const getPartStr = (state, str) => (state ? str : '');

  const importStr =
    getPartStr(hasComponent, importComponentStr) +
    getPartStr(hasDirective, importDirectiveStr) +
    getPartStr(hasService, importServiceStr);

  const installStr =
    getPartStr(hasComponent, installComponentStr) +
    getPartStr(hasDirective, installDirectiveStr) +
    getPartStr(hasService, installServiceStr);

  return `\
import type { App } from 'vue';\
${importStr}

export * from './src/${componentName}-types';

export { ${[
    hasComponent ? bigCamelCase(componentName) : null,
    hasDirective ? bigCamelCase(directiveName) : null,
    hasService ? bigCamelCase(serviceName) : null
  ]
    .filter((p) => p !== null)
    .join(', ')} };

export default {
  title: '${bigCamelCase(componentName)} ${title}',
  category: '${category}',
  status: '1%', // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(app: App): void {
    ${installStr}
  }
};
`;
};




// 创建测试模板
export const createTestsTemplate = ({
  componentName,
  directiveName,
  serviceName,
  hasComponent,
  hasDirective,
  hasService
}) => `\
import { ComponentPublicInstance } from 'vue';
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils';
import { ${[
    hasComponent ? bigCamelCase(componentName) : null,
    hasDirective ? bigCamelCase(directiveName) : null,
    hasService ? bigCamelCase(serviceName) : null
  ]
    .filter((p) => p !== null)
    .join(', ')} } from '..';

describe('${componentName}', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  it('${componentName} init render', async () => {
    wrapper = mount({
      setup() {
        return () => {
          return <${bigCamelCase(componentName)} />;
        };
      },
    });

    // todo
  })
})
`;