<template>
  <div>
    人脸检索
    {{ title }}
  </div>
</template>

<script>
  export default {
    computed:{
      title(){
        return this.$store.getters['faceSearch/getTitle']
      }
    }
  }
</script>

<style scoped>

</style>