<template>
  <div>
    抓拍检索
    {{title}}
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.getters['captureSearch/getTitle']
      }
    }
  }
</script>

<style scoped>

</style>