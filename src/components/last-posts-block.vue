=<template>
    <section id="blog" class="default-block container">
        <h2 class="block-title-blog">Last posts</h2>
        <a href="#" class="default-purple-a all-posts-a first-post-a">ALL POSTS</a>
        <lastPost
            v-for="item in items"
            :key="item"
            :post-img="item.postImg"
            :post-title="item.postTitle"
            :post-desc="item.postDesc"
            :post-date="item.postDate"
        />
        <a href="#" class="default-purple-a all-posts-a second-post-a">ALL POSTS</a>
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
                    postTitle: 'Choosing The Right Path',
                    postDesc:
                        'Although this is well intentioned and the goal certainly is to reduce the quantity ' +
                        'of these bothersome thoughts, the technique is inherently flawed. Requiring the individual ' +
                        'to remember what not to think of infers that they have already thought it. It is akin to ' +
                        'telling them to not think of a blue banana.',
                    postDate: '58 Oct 20'
                },
                {
                    postImg: 'images/article-img.jpg',
                    postTitle: 'Start your journey here',
                    postDesc:
                        'The only moment, the only life we have is in the NOW. What happened a few moments or ' +
                        'several years ago is gone, what will happen this evening, or next month when we go' +
                        ' on holidays is not here yet.',
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