<template>
  <div>
    <div>布控任务</div>
    <div>{{ title }}</div>
    <div>{{$t('alarm.surveillanceTask.title')}}</div>
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.getters['surveillanceTask/getTitle']
      }
    },
    mounted(){
      console.log(this.$store)
      console.log(this.$store.getters)
      console.log(this.title);
    }
  }
</script>

<style scoped>

</style>