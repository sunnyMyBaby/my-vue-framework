<template>
  <div class="menu">
    <div v-for="nav in subNavs" :key="nav.id">
      <router-link :to="`${nav.url}`">{{nav.name}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    mounted(){
    },
    computed: {
      subNavs() {
        const navs = this.$store.getters.getMenu;
        const parentName = this.$store.getters.getNavsByParent;
        let subNavs = [];
        // 点击路由的时候这里会执行的
        navs.forEach((nav)=>{
          if(nav.alias === parentName && nav.childPermissions){
            subNavs = nav.childPermissions
          }
        })
        return subNavs
      }
    },
    methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      }
    }
  }
</script>

<style scoped>
  .menu div{
    height: 50px;
    width: 100px;
    color:#fff;
    cursor: pointer;
    line-height: 50px;
  }
  .menu a{
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
  }
</style>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100px;
    min-height: 400px;
    background: trans;
  }
</style>
