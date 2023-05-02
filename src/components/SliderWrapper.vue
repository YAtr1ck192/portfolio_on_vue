<template>
    <div class="slider-wrapper">
        <div class="arrow_left"><img src="/images/arrow-left.png" alt="arrow"/></div>

        <swiper class="swiper container" :options="swiperOption">
            <swiper-slide
                v-for="(slide, index) in slides"
                :key="index"
            >
                <a :href="slide.link"><img :src="slide.icon" alt="slide"/></a>
            </swiper-slide>
        </swiper>

        <div class="arrow_right"><img src="/images/arrow-right.png" alt="arrow"/></div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
    name: "socialSlider",
    components: {
        Swiper,
        SwiperSlide
    },
    data () {
        return {
            slides: []
        }
    },
    computed: {
        swiperOption() {
            return {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
                loop: true,
                navigation: {
                    nextEl: '.arrow_right',
                    prevEl: '.arrow_left'
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    620: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1201: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },


                }
            }
        }
    },
    created() {
        this.axios.get('/api/data.json')
          .then(response => {
                this.slides = response.data.social.content
            }
          )
    }
}
</script>

<style scoped>

.slider-wrapper {
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.swiper {
    max-width: 940px;
}
.swiper-button-next  img {
    transform: rotate(180deg);
}

.arrow_left, .arrow_right {
    cursor: pointer;
    border: none;
    background: transparent;
    width: 48px;
    height: 48px;
    position: absolute;
}
.arrow_left {
    left: 56px;
}
.arrow_right {
    right: 56px;
}
.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
}
.swiper-slide img {
    max-width: 140px;
    max-height: 80px;
}
.swiper {
    max-width: 940px;
}
@media screen and (min-width: 1001px) and (max-width: 1200px){
    .swiper {
        max-width: 460px;
    }
}
@media screen and (min-width: 941px) and (max-width: 1000px) {
    .swiper {
        max-width: 460px;
    }
}
@media screen and (min-width: 820px) and (max-width: 940px) {
    .swiper {
        max-width: 460px;
    }
}
@media screen and (min-width: 620px) and (max-width: 819px) {
    .swiper {
        max-width: 460px;
    }
    .arrow_left {
        left: 10px;
    }
    .arrow_right {
        right: 10px;
    }
}
@media screen and (min-width: 320px) and (max-width: 619px){
    .arrow_left {
        left: 10px;
    }
    .arrow_right {
        right: 10px;
    }
    .swiper {
        max-width: 120px;
    }
    .swiper-slide img {
      margin-left: -15px;
    }
}
</style>
