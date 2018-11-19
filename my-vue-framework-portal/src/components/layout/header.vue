<template>
  <div class="head-nav">
    <span>{{$t('portal.title')}}</span>
    <router-link v-for="headNav in headNavs" :key="headNav.id"
      class="nav"
      :to="`/${headNav.alias}`">
      {{ headNav.name }}
    </router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      headNavs(){
        return this.$store.getters.getMenu
      }
    },
    watch: {
     '$route':function(to){
        this.setParentRoute(to)
     }
    },
    methods: {
      setParentRoute(to) {
        console.log(to);
        console.log(this.$route)
        this.$store.dispatch('setNavsByParentAsync', to.meta.parent).then(()=>{

        })
      }
    }
  }
</script>

<style scoped>
  .head-nav{
    display: flex;
    flex-direction: row;
    justify-content:center;
  }
  .nav{
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
  }
  .head-nav a{
    padding: 0 10px;
  }
</style>