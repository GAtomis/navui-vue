
import { defineConfig, build} from 'vite'
import path from 'path' 
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'url'
import fsExtra from 'fs-extra'
const __filenameNew = fileURLToPath(import.meta.url)

const __dirnameNew = path.dirname(__filenameNew)
const entryDir = path.resolve(__dirnameNew, '../../../dev-ui')
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
const buildSingle = async (name)=>{
    await build(defineConfig({
        ...baseConfig,
        build:{
            rollupOptions,
            lib:{
                entry:path.resolve(entryDir,name),
                name:'index',
                fileName:'index',
                formats:['es','umd']
            },
            outDir:path.resolve(outputDir,name)
        }

    }))
} 
//生成组件的 package.json 文件
const createPackageJson = name=>{
    const fileStr= `{
        "name":"${name}",
        "version":"0.0.0",
        "main":"index.umd.js",
        "module":"index.js",
        "style":"style.css",
        "types": "../types/${name}/index.d.ts"

    }`
    fsExtra.outputFile(
        path.resolve(outputDir,`${name}/package.json`),
        fileStr,
        "utf-8"
    )
}

export {
    createPackageJson,
    buildSingle
}