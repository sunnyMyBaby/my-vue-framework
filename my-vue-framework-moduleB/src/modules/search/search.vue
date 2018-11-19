<template>
  <div>
    search
    <div>{{title}}</div>
    <div>{{mSetmOra}}</div>
    <div>
      regester的：{{ getRtitle }}
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.getters['search/getTitle']
    },
    mSetmOra () {
      return this.$store.getters['search/getmSetmOra']
    },
    getRtitle () {
      return this.$store.getters['regester/getTitle']
    }
  },
  mounted () {
    // this.$store.commit('search/mSetmOra', 'mutations修改')
    // console.log()
    this.$store.dispatch('search/aycnSetmOra', 'actions修改')
  }
}
</script>

<style scoped>

</style>
