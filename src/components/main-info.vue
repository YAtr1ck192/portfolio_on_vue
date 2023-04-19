<template>
    <div id="about" class="main-info container">
        <div class="main-info-left-part">
            <h1 class="person-name">{{ userName }}</h1>
            <div class="person-speciality small-p">
                {{ specialty }}
            </div>
            <a
                class="default-purple-a main-info-a"
                :href="aLink"
                @click.prevent.stop="Scroll(aLink)"
            >{{ buttonContent }}</a>
        </div>
        <img class="main-image" src="/images/person-img.jpg" alt="person-img">
    </div>
</template>

<script>
import {ScrollToElem} from '@/utils/helpers'
export default {
    name: "main-info",
    data () {
        return {
            userName: 'I am Tolya',
            specialty: 'Frontend-developer',
            buttonContent: 'SCROLL TO MORE',
            aLink: '#skills'
        }
    },
    methods: {
        Scroll(aLink) {
            ScrollToElem(aLink)
        },
    }
}
</script>

<style scoped>
.main-info {
    display: flex;
    justify-content: space-between;
}
.main-image {
    width: 550px;
    position: absolute;
    right: 0;
    z-index: -1;
}
.main-info-left-part .person-name {
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
}
.default-purple-a {
    text-decoration: none;
    color: #6E38F7;
    font-size: 12px;
    font-family: "rm";
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
    .main-info{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .main-info-left-part .person-name {
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .main-info-left-part .small-p {
        margin-bottom: 30px;
    }
    .main-info .main-image {
        margin-top: 26px;
        margin-bottom: 76px;
    }
    .main-image{
        position: static;
        width: 558px;
    }
}
@media screen and (min-width: 320px) and (max-width: 619px){
    .main-info{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .main-info-left-part .person-name {
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .main-info-left-part .small-p {
        margin-bottom: 30px;
    }
    .main-info .main-image {
        position: static;
        margin-top: 26px;
        width: 100%;
    }
}
</style>