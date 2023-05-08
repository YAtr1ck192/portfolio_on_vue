=<template>
    <section id="blog" class="default-block container">
        <h2 class="block-title-blog">{{ title }}</h2>
        <router-link
                to="/blog"
                class="default-purple-a all-posts-a first-post-a"
        >{{ linkContent }}
        </router-link>
        <lastPost
            v-for="(item, index) in posts"
            :key="index"
            :post="item"
        />
        <router-link
                to="/blog"
                class="default-purple-a all-posts-a second-post-a"
        >{{ linkContent }}
        </router-link>
    </section>
</template>

<script>
import lastPost from "@/components/post-card.vue";
import {mapActions, mapState} from "vuex";

export default {
    name: "last-posts-block",
    data () {
        return {
            title: "Последние посты",
            linkContent: "Все посты",
        }
    },
    components: {
        lastPost,
    },
    computed: {
        ...mapState('postsBlock', {
            posts: "posts"
        })
    },
    methods: {
        ...mapActions('postsBlock', ['GET_POSTS'])
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
    margin: 50px 0 50px;
    font-size: 36px;
    color: #363940;
    font-family: "rm";
    text-align: center;
}
.first-post-a{
    display: flex;
    align-self: flex-end;
    justify-content: flex-start;
    margin: 0 0 50px 0;
}
.second-post-a {
    display: none;
}
.all-posts-a {
    font-size: 14px;
}
@media screen and (max-width:1000px) and (min-width: 520px) {
    .first-post-a {
        display: none;
    }
    .second-post-a{
        display: flex;
        align-self: center;
        justify-content: center;
    }
    #blog.default-block {
        max-width: 472px;
    }
}
@media screen and (max-width:519px) and (min-width: 320px) {
    .first-post-a {
        display: none;
    }
    .second-post-a{
        display: flex;
        align-self: center;
        justify-content: center;
    }
    #blog.default-block {
        max-width: 214px;
    }
}
</style>
