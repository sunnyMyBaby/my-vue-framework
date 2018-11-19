'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = require('../config/publish.env')
console.log('ssssssssss')
console.log(env);
const webpackConfig = merge(baseWebpackConfig, {
  // 这里的入口和正常打包是不同的，所以这里我们暂时为空，在publish里边我们在配置
  entry: {},
  module: {
    // 样式文件处理规则，对css/sass/scss等不通内容使用相应的styleloaders
    // 有utils配置出各种类型预处理语言所需的loader，例如sass需要使用sass-loader
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      // 是否分离js，否
      extract: false,
      usePostCSS: true
    })
  },
  // devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    // 输出路径
    path: config.pub.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash:5].js'),
    // http://www.cnblogs.com/joyco773/p/9049623.html
    // https://segmentfault.com/q/1010000004676608
    // 配置组件名称
    // libraryTarget和library
    // 当我们用webpack去构建一个可以被其他模块倒入使用的组件库时需要用到他们
    // libraryTarget配置以何种方式出库
    // library配置导出库的名称
    library: '[name]'
  },
  // 打包的时候排除externals里边的依赖
  // 这里只是一个demo，所以我们用不到
  // externals: {
  //   'insight-utils/moment': 'insightApp.moment',
  //   'insight-utils/lodash': 'insightApp.lodash',
  //   'insight-utils': 'insightApp.utils',
  //   'insight-components': 'insightApp.components.insightComponents',
  //   'element-ui': 'insightApp.components.elementUI',
  //   'megvii-ui': 'insightApp.components.megviiUI',
  //   'element-ui/lib/locale/lang/zh-CN': 'insightApp.locale.elementUI.zh',
  //   'element-ui/lib/locale/lang/en': 'insightApp.locale.elementUI.en',
  //   'megvii-ui/dist/lib/i18n/lang/en': 'insightApp.locale.megviiUI.en',
  //   'megvii-ui/dist/lib/i18n/lang/zh-CN': 'insightApp.locale.megviiUI.zh'
  // },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // 压缩js代码
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      // sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    // extract css into its own file
    // 讲css单独提取到文件中
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    // 优化、最小化css代码，如果只简单使用extract-text-plugin可能会造成css重复
    // 具体原因可以看npm上面optimize-css-assets-webpack-plugin的介绍
    // 再webpack4中OptimizeCSSPlugin可以单独使用了不需要使用ExtractTextPlugin
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.pub.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),



    // see https://github.com/ampedandwired/html-webpack-plugin
    // 讲产品文件注入到index.html   这里我们不需要因为我们不需要注入，打包的是纯js
    // new HtmlWebpackPlugin({
    //   filename: config.build.index,
    //   template: 'index.html',
    //   inject: true,
    //   minify: {
        // 删除index.html中的注释
        // removeComments: true,
        // 删除index.html中的空格
        // collapseWhitespace: true,
        // 删除各种html标签属性值的双引号
        // removeAttributeQuotes: true
        // https://github.com/kangax/html-minifier#options-quick-reference
      // },
      // 注入依赖的时候按照依赖先后顺序进行注入，比如，需要先注入vendor.js，再注入app.js
      // chunksSortMode: 'dependency'
    // }),
    // keep module.id stable when vendor modules does not change

    
    // 该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境。
    // new webpack.HashedModuleIdsPlugin(),


    // 启用作用域提升
    // 作用是让代码文件更小，运行更快---实际没多大作用
    // new webpack.optimize.ModuleConcatenationPlugin(),
    
    // 将所有从node_modules中引入的js提取到vendor.js，即抽取库文件
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks (module) {
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         path.join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),


    // 从vendor中提取manifest，因为单独使用CommonsChunkPlugin会有问题
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   minChunks: Infinity
    // }),

    // 将所有从node_modules中引入的js提取到app.js
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'app',
    //   async: 'vendor-async',
    //   children: true,
    //   minChunks: 3
    // }),

    //  将static文件夹里边的金泰资源复制到dist/static
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../static'),
    //     to: config.build.assetsSubDirectory,
    //     ignore: ['.*']
    //   }
    // ])
  ]
})


// 如果开启了gzip压缩，则利用插件讲构建后的产品文件进行压缩
// if (config.build.productionGzip) {
//   一个用于压缩的webpack插件
//   const CompressionWebpackPlugin = require('compression-webpack-plugin')

//   webpackConfig.plugins.push(
//     new CompressionWebpackPlugin({
//       asset: '[path].gz[query]',
//       压缩算法
//       algorithm: 'gzip',
//       test: new RegExp(
//         '\\.(' +
//         config.build.productionGzipExtensions.join('|') +
//         ')$'
//       ),
//       threshold: 10240,
//       minRatio: 0.8
//     })
//   )
// }

// 如果启动了report，则通过插件给出webpack构建后的产品分析报告
// if (config.build.bundleAnalyzerReport) {
//   const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//   webpackConfig.plugins.push(new BundleAnalyzerPlugin())
// }

module.exports = webpackConfig
