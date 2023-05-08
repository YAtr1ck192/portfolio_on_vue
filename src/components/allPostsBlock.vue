<template>
    <section id="blog" class="default-block container">
        <h2 class="block-title-blog">{{ title }}</h2>
        <lastPost
                v-for="(item, index) in posts"
                :key="index"
                :post="item"
        />
    </section>
</template>

<script>
import lastPost from "@/components/post-card.vue";
import {mapActions, mapState} from "vuex";

export default {
    name: "allPostsBlock",
    data () {
        return {
            title: "Блог",
        }
    },
    components: {
        lastPost
    },
    computed: {
        ...mapState('allPostsBlock', {
            posts: 'posts'
        })
    },
    methods: {
        ...mapActions('allPostsBlock', ['GET_POSTS'])
    },
    created() {
        this.GET_POSTS()
    }
}
</script>

<style scoped>
.default-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.block-title-blog {
    margin: 50px 0 75px;
    font-size: 36px;
    color: #363940;
    font-family: "rm";
    text-align: center;
}
@media screen and (max-width:1000px) and (min-width: 520px) {
    #blog.default-block {
        max-width: 472px;
    }
}
@media screen and (max-width:519px) and (min-width: 320px) {
    #blog.default-block {
        max-width: 214px;
    }
}
</style>