<template>
  <div>
    注册
    {{title}}
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.getters['regester/getTitle']
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
