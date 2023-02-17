import fs from 'fs'
import { VUE_NAV_UI_DIR_NAME,INDEX_FILE_NAME } from '../shared/constant'
import { kebabCase } from "lodash-es"
import { createComponentTemplate, createTypesTemplate, createStyleTemplate,createTestsTemplate,createIndexTemplate } from '../template/component'
export async function createFolder(info) {

    const { name, title, category } = info
    const componentName = kebabCase(name);
    const styleName = kebabCase(name);
    const typesName = kebabCase(name) + '-types';
    const testName = kebabCase(name) + '.spec';
    const _params = {
        ...info,
        componentName,
        styleName,
        typesName,
        testName,
        hasComponent: true
    }
    await createDir(_params)
    await createFile(_params)

}

async function createDir({ componentName }) {
    const src = fs.promises.mkdir(`./${VUE_NAV_UI_DIR_NAME}/${componentName}/src/`, { recursive: true })
    const tests = fs.promises.mkdir(`./${VUE_NAV_UI_DIR_NAME}/${componentName}/__tests__/`, { recursive: true })
    return await Promise.all([src, tests])
}
async function createFile(params) {
    const { componentName, typesName, styleName, testName } = params
    //主文件
    const components = fs.promises.writeFile(`./${VUE_NAV_UI_DIR_NAME}/${componentName}/src/${componentName}.tsx`, createComponentTemplate(params))
    //scss
    const css = fs.promises.writeFile(`./${VUE_NAV_UI_DIR_NAME}/${componentName}/src/${styleName}.scss`, createStyleTemplate(params))
    //type
    const type = fs.promises.writeFile(`./${VUE_NAV_UI_DIR_NAME}/${componentName}/src/${typesName}.ts`, createTypesTemplate(params))
    const tests = fs.promises.writeFile(`./${VUE_NAV_UI_DIR_NAME}/${componentName}/__tests__/${testName}.tsx`, createTestsTemplate(params))
    //index
    const index = fs.promises.writeFile(`./${VUE_NAV_UI_DIR_NAME}/${componentName}/${INDEX_FILE_NAME}`, createIndexTemplate(params))

    return await Promise.all([components,css,type,tests,index])

}
