'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
// const webpackConfig = require('./webpack.prod.conf') 正常打包的配置
const webpackConfig = require('./webpack.pub.conf') // export打包的配置，因为我们是有需要集成的
const fs = require('fs')// 这里我们需要读取模块下的文件路径
const filesName = fs.readdirSync(path.join(__dirname, '../src/modules'));
const entry = {}
filesName.forEach((fileName) => {
  if(fileName !== 'login' && fileName !== 'layout' && fileName !== 'common') {
    entry[`${fileName}AsyncModule`] = `./src/modules/${fileName}/export.js`
  }
})
const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  spinner.stop()
  webpackConfig.entry = entry;
  webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
