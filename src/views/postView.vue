<template>
    <div class="container">
        <postForPostPage />
        <postContactUs id="post-contact-us"/>
        <adviceBlock />
    </div>
</template>

<script>
import postForPostPage from "@/components/postForPostPage.vue";
import postContactUs from "@/components/postContactUs.vue";
import adviceBlock from "@/components/adviceBlock.vue";
import {ScrollToElem} from '@/utils/helpers'
import {mapActions, mapState} from "vuex";
export default {
    name: "postView",
    components: {
        postForPostPage,
        postContactUs,
        adviceBlock
    },
    methods: {
        Scroll(link) {
            ScrollToElem(link)
        },
        ...mapActions('postsBlock', ['GET_POSTS'])
    },
    computed: {
        ...mapState('postsBlock', {
            posts: "posts",
        })
    },
    created() {
        this.GET_POSTS()
    },
}
</script>

<style scoped>
    .container {
        padding: 0 16px;
    }
    #post-contact-us {
        margin: 100px 0;
    }
</style>