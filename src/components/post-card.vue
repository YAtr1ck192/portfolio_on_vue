<template>
    <article class="article-card">
        <img class="article-img" :src="post.img" alt="article-img">
        <div class="article-card-desc">
            <div class="article-title-and-desc">
                <div class="card-title blog-title">{{ post.title }}</div>
                <div class="card-desc article-desc">
                    <p>{{ post.description }}</p>
                </div>
            </div>
            <div class="bottom-card-item">
                <div class="small-p date-add">
                    {{ post.date }}
                </div>
                <router-link
                        class="default-purple-a"
                        :to="{name: 'post', params: { id: post.id }}"
                >
                    {{ post.linkContent }}
                </router-link>
            </div>
        </div>
        <router-view />
    </article>
</template>

<script>
export default {
    name: "last-post",
    props:[
        'post'
    ],
}
</script>

<style scoped>
.article-card {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.article-img {
    width: 440px;
    height: 270px;
    margin-right: 40px;
}
.article-card-desc {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
}
.blog-title {
    font-size: 24px;
    margin-bottom: 20px;
    font-family: 'rm';
    color: #363940;
    flex-wrap: wrap;
}
.article-card-desc {
    min-height: 230px;
    flex-wrap: wrap;
}
.article-desc {
    max-width: 460px;
    flex-wrap: wrap;
}
.bottom-card-item {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 460px;
}
a {
    font-size: 14px;
}

@media screen and (max-width:1000px) and (min-width: 520px) {
    .article-img{
        margin-right: 0;
        margin-bottom: 20px;
    }
    .article-card, .blog-title, .article-card-desc, .bottom-card-item {
        max-width: 440px;
    }
}
@media screen and (max-width:519px) and (min-width: 320px) {
    .article-img{
        margin-right: 0;
        max-height: 218px;
        margin-bottom: 20px;
        max-width: 214px
    ;
    }
    .article-card, .blog-title, .article-card-desc, .bottom-card-item {
        max-width: 214px;
    }
    .article-card{
        margin-bottom: 40px;
    }
    .bottom-card-item .default-purple-a {
        padding-top: 32px;
    }
}
</style>
