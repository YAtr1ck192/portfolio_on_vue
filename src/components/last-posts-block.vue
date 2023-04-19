=<template>
    <section id="blog" class="default-block container">
        <h2 class="block-title-blog">{{ blogTitle }}</h2>
        <a href="#" class="default-purple-a all-posts-a first-post-a">{{ linkContent }}</a>
        <lastPost
            v-for="item in items"
            :key="item.id"
            :post="item"
        />
        <a href="#" class="default-purple-a all-posts-a second-post-a">{{ linkContent }}</a>
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
            blogTitle:'Last posts',
            linkContent: 'ALL POSTS',
            items: [
                {
                    postImg: 'images/article-img.jpg',
                    postTitle: 'There are many reasons to get down',
                    postDesc:
                        'The only moment, the only life we have is in the NOW. What happened a few moments or ' +
                        'several years ago is gone, what will happen this evening, or next month when we go on ' +
                        'holidays is not here yet.',
                    postDate: '10 Oct 21'
                },
                {
                    postImg: 'images/article-img.jpg',
                    postTitle: 'There are many reasons to get down',
                    postDesc:
                        'The only moment, the only life we have is in the NOW. What happened a few moments or ' +
                        'several years ago is gone, what will happen this evening, or next month when we go on ' +
                        'holidays is not here yet.',
                    postDate: '58 Oct 20'
                },
                {
                    postImg: 'images/article-img.jpg',
                    postTitle: 'There are many reasons to get down',
                    postDesc:
                        'The only moment, the only life we have is in the NOW. What happened a few moments or ' +
                        'several years ago is gone, what will happen this evening, or next month when we go on ' +
                        'holidays is not here yet.',
                    postDate: '29 Oct 18'
                }
            ]
        }
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
