<template>
  <div id="homePage" class="home">
      <MainInfo id="about" />
      <SkillsBlock id="skills"/>
      <SocialNetworkBlock id="social" />
      <LastPostsBlock id="blog"/>
      <FormBlock id="contact-us"/>
  </div>
</template>

<script>
import MainInfo from '@/components/main-info.vue';
import SkillsBlock from '@/components/skills-block.vue';
import SocialNetworkBlock from '@/components/social-network-block.vue';
import FormBlock from '@/components/form-block.vue';
import LastPostsBlock from '@/components/last-posts-block.vue';
export default {
    name: "homeView",
    components: {
        MainInfo,
        SkillsBlock,
        SocialNetworkBlock,
        FormBlock,
        LastPostsBlock
    }
}
</script>

<style scoped>
</style>
