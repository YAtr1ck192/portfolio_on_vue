=<template>
    <section id="blog" class="default-block container">
        <h2 class="block-title-blog">{{ posts.title }}</h2>
        <a href="#" class="default-purple-a all-posts-a first-post-a">{{ posts.linkContent }}</a>
        <lastPost
            v-for="item in posts.content"
            :key="item.id"
            :post="item"
        />
        <a href="#" class="default-purple-a all-posts-a second-post-a">{{ posts.linkContent }}</a>
    </section>
</template>

<script>
import lastPost from "@/components/last-post.vue";
export default {
    name: "last-posts-block",
    components: {
        lastPost,
    },
    data () {
        return {
            posts: {
                title: '',
                linkContent: '',
                content: [],
            },

        }
    },
    created() {
        this.axios.get('/api/data.json')
          .then(response => {
              this.posts = response.data.posts
          })
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
@import "@/css/global_styles.css";
</style>
