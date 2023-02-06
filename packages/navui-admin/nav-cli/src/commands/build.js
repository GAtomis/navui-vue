
import path from 'path'
import fs from 'fs'
import { defineConfig, build } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'url'
import { createPackageJson, buildSingle } from './demand-loading.js'
import {execSync} from "child_process"
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
const entryDir = path.resolve(__dirnameNew, '../../../nav-ui')
const outputDir = path.resolve(__dirnameNew, '../../../build')

//vite配置
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue(), vueJsx()]
})
//rollup打包配置
const rollupOptions = {
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: "Vue" //umd模式外置对象
        }
    }
}

//全局构建
const buildAll = async () => {
    await build(defineConfig({
        ...baseConfig,
        build: {
            rollupOptions,
            lib: {
                entry: path.resolve(entryDir, 'main.ts'),
                name: 'index',
                fileName: 'index',
                formats: ['es', 'umd']
            },
            outDir: outputDir
        }
    }))
}

const buildLib = async () => {
    //全局打包
    await buildAll()
    //按需加载打包
    const components = fs.readdirSync(entryDir).filter(name => {
        const componentDir = path.resolve(entryDir, name)
        const isDir = fs.lstatSync(componentDir).isDirectory()
        return isDir && fs.readdirSync(componentDir).includes('index.ts')
    })

    for (const name of components) {
        await buildSingle(name)
        createPackageJson(name)
    }
    try {
        execSync(`pnpm run build:components:dts`);
    } catch { }

    fs.writeFileSync('./build/index.d.ts', `
      export * from './types/main';
      import _default from './types/main';
      export default _default;
      `);

}
buildLib()