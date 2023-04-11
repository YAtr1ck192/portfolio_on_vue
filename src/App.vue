<template>
  <div id="app">
    <HeaderBlock />
    <MenuBurgerContent />
    <MainInfo />
  </div>
</template>

<script>
import HeaderBlock from './components/header-block.vue';
import MenuBurgerContent from './components/menu-burger-content.vue';
import MainInfo from './components/main-info.vue'


export default {
  name: 'App',
  components: {
      HeaderBlock,
      MenuBurgerContent,
      MainInfo
  },
}
</script>

<style>
@import "@/css/global_styles.css";
</style>
