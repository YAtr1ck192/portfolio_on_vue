<template>
    <div id="postForPostPage" class="post-for-post-page container">
        <div class="post-block-left-part">
            <h1 class="person-name">{{ post[$route.params.id - 1].title }}</h1>
            <div class="person-speciality small-p">
                {{ post[$route.params.id - 1].description }}
            </div>
        </div>
        <img class="main-image" :src="post[$route.params.id - 1].postImg" alt="person-img">
    </div>
</template>

<script>
import {ScrollToElem} from '@/utils/helpers'
import {mapActions, mapState} from "vuex";
export default {
    name: "postForPostPage",
    methods: {
        Scroll(link) {
            ScrollToElem(link)
        },
        ...mapActions('post', ['GET_POST'])
    },
    computed: {
        ...mapState('post', {
            post: "post",
        }),
    },
    created() {
        this.GET_POST()
    },
    updated() {
        console.log(this.post)
    }
}
</script>

<style scoped>
.post-for-post-page {
    display: flex;
    justify-content: space-between;
}
.main-image {
    width: 550px;
    height: 800px;
    position: absolute;
    right: 0;
    z-index: -1;
}
.post-block-left-part .person-name {
    font-size: 58px;
    color: #363940;
    font-family: "rm";
    margin: 215px 0 106px 0;
    max-width: 300px;
}
.person-speciality {
    font-size: 16px;
    color: #95A1BB;
    font-family: "rr";
    margin-bottom: 213px;
    max-width: 400px;
}
@media screen and (min-width: 820px) and (max-width: 940px) {
    .main-info-left-part .person-name {
        max-width: 200px;
    }
}
@media screen and (min-width: 620px) and (max-width: 819px) {
    .main-info-left-part .person-name {
        max-width: 300px;
    }
    .post-for-post-page{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .post-block-left-part .person-name {
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .post-block-left-part .small-p {
        margin-bottom: 30px;
    }
    .main-info .main-image {
        margin-top: 26px;
        margin-bottom: 76px;
    }
    .post-for-post-page .main-image{
        position: static;
        width: 558px;
    }
}
@media screen and (min-width: 320px) and (max-width: 619px){
    .post-for-post-page{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .post-block-left-part .person-name {
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .post-block-left-part .small-p {
        margin-bottom: 30px;
    }
    .post-for-post-page .main-image {
        position: static;
        margin-top: 26px;
        width: 100%;
    }
    .main-info .main-image {
        margin-top: 26px;
        margin-bottom: 76px;
    }
    .post-for-post-page .main-image{
        position: static;
        width: 100%;
        height: 413px;
    }
}
</style>