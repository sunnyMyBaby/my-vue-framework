const rm = require('rimraf')
const path = require('path')
const moduleName  = process.argv[2];// 获取输入的命令
const OUTPUT_PATH = path.join(__dirname, `../src/modules/${moduleName}`)
const STORE_OUTPUT_PATH = path.join(__dirname, `../src/store/modules/${moduleName}.js`)
const chalk = require('chalk');
const error = chalk.keyword('orange');
// 如果路径不存在就会报错c
rm(OUTPUT_PATH, err=>{
  if(err){
    return err
  }
  console.log(chalk.bgBlack(chalk.red('successfully')) + ' deleted successfully !')
})

rm(STORE_OUTPUT_PATH, err=>{
  if(err){
    return err
  }
  console.log(chalk.bgBlack(chalk.red('successfully')) + ' deleted successfully !')
})