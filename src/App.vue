<template>
  <div id="app">
    <HeaderBlock />
    <MenuBurgerContent />
    <MainInfo />
    <SkillsBlock />
    <SocialNetworkBlock />
    <FormBlock />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from './components/header-block.vue';
import MenuBurgerContent from './components/menu-burger-content.vue';
import MainInfo from './components/main-info.vue';
import SkillsBlock from './components/skills-block.vue';
import SocialNetworkBlock from './components/social-network-block.vue';
import FormBlock from './components/form-block.vue';
import FooterBlock from './components/footer-block.vue';


export default {
  name: 'App',
  components: {
      HeaderBlock,
      MenuBurgerContent,
      MainInfo,
      SkillsBlock,
      SocialNetworkBlock,
      FormBlock,
      FooterBlock,
  },
}
</script>

<style>
  @import "@/css/global_styles.css";
</style>
