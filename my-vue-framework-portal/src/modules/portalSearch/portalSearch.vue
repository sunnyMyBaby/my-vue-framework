<template>
  <div>
    检索页面
    <div>{{ searhTitle }}</div>
  </div>
</template>

<script>
  export default {
    computed: {
      searhTitle(){
        return this.$store.getters['search/getSearchTitle']
      }
    },
    mounted(){
      this.$store.dispatch('search/actionsSearch', 'bbbb')
      console.log(this.$router)
    }
  }
</script>

<style scoped>

</style>