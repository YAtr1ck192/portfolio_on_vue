<template>
    <div id="postForPostPage" class="post-for-post-page container">
        <div class="post-block-left-part">
            <h1 class="post-name">{{ post[$route.params.id].title }}</h1>
            <div class="post-desc small-p">
                {{ post[$route.params.id].description }}
            </div>
        </div>
        <img class="post-image" :src="post[$route.params.id].img" alt="person-img">
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
.post-image {
    width: 550px;
    height: 800px;
    position: absolute;
    right: 0;
    z-index: -1;
}
.post-block-left-part .post-name {
    font-size: 58px;
    color: #363940;
    font-family: "rm";
    margin: 215px 0 106px 0;
    max-width: 300px;
}
.post-desc {
    font-size: 16px;
    color: #95A1BB;
    font-family: "rr";
    margin-bottom: 213px;
    max-width: 400px;
}
@media screen and  (max-width: 940px) {
    .main-info-left-part .post-name {
        max-width: 200px;
    }
    .post-desc {
        max-width: 300px;
    }
    .post-image {
        width: 500px;
        height: 700px;
    }
}
@media screen and (max-width: 819px) {
    .post-for-post-page{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .post-block-left-part .post-name {
        margin-top: 10px;
        margin-bottom: 15px;
        max-width: 500px;
    }
    .post-block-left-part .small-p {
        margin-bottom: 30px;
        max-width: 500px;
    }
    .main-info .post-image {
        margin-top: 26px;
        margin-bottom: 76px;
    }
    .post-for-post-page .post-image{
        position: static;
        width: 558px;
    }
}
@media screen and (min-width: 320px) and (max-width: 619px){
    .post-for-post-page{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .post-block-left-part .post-name {
        margin-top: 10px;
        margin-bottom: 15px;
        max-width: 500px;
        font-size: 44px;
    }
    .post-block-left-part .small-p {
        margin-bottom: 30px;
        max-width: 500px;
    }
    .post-for-post-page .post-image {
        position: static;
        margin-top: 26px;
        width: 100%;
        margin-bottom: 76px;
        height: 413px;
    }
}
</style>
