<template>
  <div class="layout">
    <div class="header">
     检索
    </div>
    <div class="menu-box">
      <div class="left-menu">
        <my-menu></my-menu>
      </div>
      <div class="menu-content">
        <my-content></my-content>
      </div>
    </div>
  </div>
</template>

<script>
  import MyMenu from '../../components/layout/menu.vue'
  import MyContent from '../../components/layout/content.vue'
  export default {
    components:{
      MyMenu,
      MyContent
    }
  }
</script>

<style scoped>
  .menu-box{
    width: 100%;
    height: calc(100% - 50px);
    display: flex;
    flex-direction: row;
  }
  .layout{
    height: 100%;
  }
  .header{
    line-height: 50px;
    text-align: center;
    color:#fff;
    height: 50px;
    width: 100%;
    background: linear-gradient(to right, #1c1843 0%,#1c1843 22%,#435080 57%,#435080 78%,#2ab1c7 100%);
  }
  .left-menu{
    width: 100px;
    height: 100%;
    background: linear-gradient(to bottom, #1c1843 0%, #1c1843 30%, #435080 78%, #435080 90%, #3670a0 100%);
  }
  .menu-content{
    flex: 1;
  }
</style>