<template>
    <div class="app">
        <HeaderBlock />
        <MainInfo id="about" />
        <SkillsBlock id="skills"/>
        <SocialNetworkBlock id="social" />
        <LastPostsBlock id="blog"/>
        <FormBlock id="contact-us"/>
        <FooterBlock />
    </div>
</template>

<script>
import HeaderBlock from '@/components/header-block.vue';
import MainInfo from '@/components/main-info.vue';
import SkillsBlock from '@/components/skills-block.vue';
import SocialNetworkBlock from '@/components/social-network-block.vue';
import FormBlock from '@/components/form-block.vue';
import FooterBlock from '@/components/footer-block.vue';
import LastPostsBlock from '@/components/last-posts-block.vue'

export default {
    name: "parent-block",
    components: {
        LastPostsBlock,
        SocialNetworkBlock,
        FormBlock,
        FooterBlock,
        MainInfo,
        HeaderBlock,
        SkillsBlock
    },
}
</script>

<style scoped>
    @import "@/css/global_styles.css";
</style>