// 自动生成模块的模版
const exportTpl = 
`import module from '@/modules/{{moduleName}}/{{moduleName}}'
  import routes from '@/modules/{{moduleName}}/{{moduleName}}.router.js'
  import store from '@/store/modules/{{moduleName}}'
  import enUS from '@/i18n/en-US'
  import zhCN from '@/i18n/zh-CN'
  export default {
    module,
    routes,
    store,
    i18n:{
      enUS,
      zhCN
    }
  }
`
module.exports = exportTpl