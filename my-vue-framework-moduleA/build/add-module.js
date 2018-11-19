/**
 * 自动生成module目录
 * src/modules/
 */
const fs = require('fs'); // 读取文件流插件
const path = require('path'); // 文件
const render = require('json-templater/string');// JSON模板用于解析我们的tpl，然后在{{}}里边插入东西
const uppercamelcase = require('uppercamelcase');// 驼峰命名abcd_bnadaf =>AbcdBnadaf
const camelCase = require('camelcase');// 驼峰命名abcd_bnadaf => abcdBnadaf
// process 对象是一个全局变量，他提供当前Node.js进程的有关信息，以及控制当前Node.js进程，因为是一个变量所以无需require()
const moduleName = process.argv[2];// 获取我们输入的命令行add后的名字
const uppercameModuleName = uppercamelcase(moduleName);
const camelModuleName = camelCase(moduleName);

const OUTPUT_PATH = path.join(__dirname,`../src/modules/${moduleName}`); // 输出路径

const MODULE_OUTPUT_PATH = path.join(__dirname,`../src/modules/${moduleName}/${moduleName}.vue`);
const STORE_OUTPUT_PATH = path.join(__dirname,`../src/store/modules/${moduleName}.js`);
const ROUTER_OUTPUT_PATH = path.join(__dirname,`../src/modules/${moduleName}/${moduleName}.router.js`);
const EXPORT_OUTPUT_PATH = path.join(__dirname,`../src/modules/${moduleName}/export.js`);

const moduleTpl = require('../config/tpl/module.tpl');
const routerTpl = require('../config/tpl/router.tpl');
const exportTpl = require('../config/tpl/export.tpl');
const storeTpl = require('../config/tpl/store.tpl');

// 检查路径是否存在，如果存在返回true
if(fs.existsSync(OUTPUT_PATH)){
  console.log('Erro this module already exist! ');
  return
}

// 通过json-templater读取模版
// 读取moduleTpl
const moduleStr = render(moduleTpl, {
  // 这里边传递的这个参数其实是为了
  moduleName
})
// 读取routerStr
const routerStr = render(routerTpl, {
  moduleName
})
// 读取exportTpl
console.log(moduleName);
const exportStr = render(exportTpl, {
  moduleName
})
console.log('aaaaa')
// 读取storeTpl
const storeStr = render(storeTpl, {
  camelModuleName
})

// 以异步的方式创建文件目录，如果目录已存在，将抛出异常

fs.mkdir(OUTPUT_PATH, err=>{
  if(err){
    console.log('Add new module dir failed!');
    throw(err)
  }
  // 创建好目录之后在里边创建文件
  fs.writeFileSync(MODULE_OUTPUT_PATH, moduleStr)
  fs.writeFileSync(STORE_OUTPUT_PATH, storeStr)
  fs.writeFileSync(ROUTER_OUTPUT_PATH,routerStr)
  fs.writeFileSync(EXPORT_OUTPUT_PATH, exportStr)

  console.log('Add new module created successfully!')
})