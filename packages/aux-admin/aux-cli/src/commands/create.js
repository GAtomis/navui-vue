import inquirer from 'inquirer'
import { red } from 'kolorist'
import { createFolder } from './createFolder'
const CREATE_TYPES = ['component', 'lib-entry']

const DOCS_CATEGORIES = ['LV Style','通用', '导航', '数据录入', '数据展示', '布局']



export async function onCreate(cm = {}) {
   let { type } = cm
   if (!type) {
      const result = await inquirer.prompt([
         {
            //用于获取后的属性名
            name: 'type',
            //交互方式为列表单选
            type: 'list',
            //提示信息
            message: '(必填)请选择创建类型：',
            //选项列表
            choices: CREATE_TYPES,
            //默认值,这里是索引下标
            default: 0
         }
      ])
      type = result.type

   }
   //如果获取的类型不在我们支持的范围内，那么输出错误提示并重新选择
   if (CREATE_TYPES.every(t => type !== t)) {
      console.log(
         red(`当前支持类型:${CREATE_TYPES.join(',')},收到不在支持范围内的“${type}”,请重新选择`)

      );

      return onCreate()

   }

   //输入正确情况
   try {
      switch (type) {
         case 'component':
            const info = await inquirer.prompt([{
               name: 'name',
               type: 'input',
               message: '(必填)请输入组件 name ,将用作目录及文件',
               validate: (value) => {
                  if (value.trim() === '') {
                     return '组件 name 是必填项'
                  }
                  return true
               },
            },{
               
               name:'title',
               type:'input',
               message:'(必填)请输入组件中文名称，将用作文档列表',
               validate:(value)=>{
                  if(value.trim() === ''){
                     return '组件名称是必填的'
                  }
                  return true
               }
            },{
               name:'category',
               type:'list',
               message:'(必填)请选择组件分类，将用作文档列表分类',
               choices:DOCS_CATEGORIES,
               default:0
            }])
            createComponent(info)

      }

   } catch (error) {

   }

} 
function createComponent(info){
   createFolder(info)
}


