<!--
 * @Author: GAtomis 850680822@qq.com
 * @Date: 2022-12-16 00:24:10
 * @LastEditors: GAtomis 850680822@qq.com
 * @LastEditTime: 2022-12-22 23:27:10
 * @FilePath: /workspace/demo.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE 
-->


## 参与开源项目

* fork仓库
* clone到本地
* 设置代码自动同步官方库保持代码最新


如何提PR
* 注意提交规范
* 把自己修复的bug，或者功能推送到个人fork仓库

## 查看提交规范
根目录下设置commitlint.config.js ,利用husky库进行设置提交规则
```
const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'release', 'chore', 'revert'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'scope-case': [0, 'always'],
    'subject-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 88],
  },
};

```
## 设置upstream和同步元仓库最新代码
查看远程仓库地址
```
git remote -v

```

默认情况下clone的仓库有以下两个远程地址 ：
``` 
zhounan@GavindeMacBook-Pro vue-devui % git remote -v
origin  git@github.com:DevCloudFE/vue-devui.git (fetch)
origin  git@github.com:DevCloudFE/vue-devui.git (push)

```
配置同步的地址 ,同步远程官方的upstream地址

```
git remote add upstream  git@github.com:DevCloudFE/vue-devui.git
//查看同步分支情况
git remote -v

```
同步官方远程分支  

```
//提交PR前 都得pull一下
git pull upstream dev

```

## 学习笔记
通过常量类型推导
```
import type { PropType, ExtractPropTypes } from 'vue';


type TreeData =Array<{
  label: string;

  children: TreeData;
}>;
export const treeTestProps = {
  data: {
    type: Array as PropType<TreeData>,
    default: [],
    required:true
  },
} as const;//推到成一个read-only熟悉 

export type TreeTestProps = ExtractPropTypes<typeof treeTestProps>;

```

## 组件库
icon解决方案 使用这种方式不会让svg打包到你的代码中去
### 安装vite-svg-loader
```
yarn add -D vite-svg-loader
```
### 单元测试

> 如何写一个单元测试
```

describe('tree',()=>{

  it('init render tree',()=>{


    expect(1).toBe(1)
  })
})

```
> 如何运行一个单元测试
```
pnpm run test --testMatch='**/**/tree.spec.(ts|tsx)'
```


