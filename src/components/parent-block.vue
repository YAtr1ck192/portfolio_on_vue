<template>
    <div class="app">
        <HeaderBlock />
        <MainInfo id="about" :promo="promo"/>
        <SkillsBlock id="skills" :skills="skills"/>
        <SocialNetworkBlock id="social" :social="social" />
        <LastPostsBlock id="blog" :posts="posts"/>
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
    data () {
        return {
            promo: {},
            skills: {},
            social: {},
            posts: {}
        }
    },
    created() {
        this.axios.get('/api/data.json')
        .then(response => {
            this.promo = response.data.promo
            this.skills = response.data.skills
            this.social = response.data.social
            this.posts = response.data.posts
        })
    }
}
</script>

<style scoped>
    @import "@/css/global_styles.css";
</style>