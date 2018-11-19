<template>
  <div>
    <div>历史报警</div>
    <div>{{title}}</div>
    <div>{{$t('alarm.alarmHistory.title')}}</div>
    <div @click="chiern">to:alarmHistoryChiern</div>
    <div @click="chiernTwo">to: alarmHistoryChiernTwo</div>
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.getters['alarmHistory/getTitle']
      }
    },
    mounted(){
      console.log(this.$store)
      console.log(this.$store.getters)
      console.log(this.title);
    },
    methods: {
      chiern(){
        console.log('aaaaaaaa')
        this.$router.push({name:'alarmHistoryChiern'})
      },
      chiernTwo(){
        this.$router.push({name:'alarmHistoryChiernTwo'})
      }
    }
  }
</script>

<style scoped>

</style>