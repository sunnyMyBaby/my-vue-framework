<template>
  <div>
    <div>实时报警</div>
    {{ $t('alarm.COMMON.title') }}
    <div @click="clickBtn">跳转到历史报警</div>
    <div @click="toSearch">跳转到检索</div>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" 
      icon="el-icon-search"
      @click="checkLanguage"
     >
    点击切换国际化
    </el-button>
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.getters['alarmRealtime/getTitle']
      }
    },
    data() {
      return {
        language: 'cn'
      }
    },
    methods:{
      toSearch(){
       this.$router.push({
          path: '/search'
        })
      },
      clickBtn(){
        this.$router.push({
          name: 'alarmHistory'
        })
      },
      // 切换国际化
      checkLanguage(){
        if(this.language === 'cn') {
          window.AppLanguage('us')
          this.language = 'us'
          console.log('11111')
        } else if(this.language === 'us'){
          console.log('22222')
          window.AppLanguage('cn')
          this.language = 'cn'
        }
      }
    }
  }
</script>

<style scoped>

</style>