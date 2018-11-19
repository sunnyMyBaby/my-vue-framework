<template>
  <div>
    检索日志
    {{ title }}
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.getters['searchLog/getTitle']
      }
    }
  }
</script>

<style scoped>

</style>