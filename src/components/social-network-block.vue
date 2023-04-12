<template>
    <div id="SOCIAL" class="social-networks-block container">
        <h2 class="block-title">My social networks</h2>
        <div class="social-networks-subtitle small-p">
            There are many reasons to get down and start to get depressed about your situation.
        </div>
        <div class="slider-track">
            <img src="../assets/images/arrow-left.png" alt="slider-arrow" class="slider-arrow slider-arrow-left">
            <img src="../assets/images/arrow-right.png" alt="slider-arrow" class="slider-arrow slider-arrow-right">
            <div class="wrapper">
                <div class="slides">
                    <div class="slide" v-for="item in items" :key="item.src">
                        <a href="#"><img :src="item.src" alt="social-network-logo"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "social-network-block",
    el:'#socialNetworkBlock',
    data() {
        return {
            items:[
                { src: '../assets/images/telegram-icon.png' },
                { src: '../assets/images/whatsapp-icon.png' },
                { src: '../assets/images/instagram-icon.png' },
                { src: '../assets/images/facebook-icon.png' },
                { src: '../assets/images/youtube-icon.png' },
                { src: '../assets/images/twitter-icon.png' },
            ]
        }
    },
    methods: {

    },
}
</script>

<style scoped>
  .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      left: 0;
      transition: .3s ease-in-out;
  }
  .social-networks-block {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 50px;
  }
  .social-networks-block .block-title{
      font-size: 36px;
      margin-bottom: 20px;
      text-align: center;
  }
  .social-networks-subtitle {
      margin-bottom: 40px;
      text-align: center;
  }
  .slider-arrow {
      position: absolute;
      cursor: pointer;
  }
  .slider-arrow-left {
      left: 40px;
  }
  .slider-arrow-right {
      right: 40px;
  }
  .slider-track {
      overflow: hidden;
      max-width: 940px;
      display: flex;
      align-items: center;
  }
.slides {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 940px;
}
.slides:last-child {
    margin-right: 0;
}

.slide {
    width: 140px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(238, 238, 238, 0.32);
    border-radius: 4px;
}
.slide img {
    max-width: 120px;
    max-height: 70px;
    padding-top: 3px;
}
  @media screen and (min-width: 1001px) and (max-width: 1200px){
      .slider-track {
          overflow: hidden;
          max-width: 460px;
      }
  }
  @media screen and (min-width: 941px) and (max-width: 1000px) {
      .slider-track {
          overflow: hidden;
          max-width: 460px;
      }
  }
  @media screen and (min-width: 820px) and (max-width: 940px) {
      .slider-track {
          overflow: hidden;
          max-width: 460px;
      }
  }
  @media screen and (min-width: 620px) and (max-width: 819px) {
      .slider-track {
          overflow: hidden;
          max-width: 460px;
      }
      .slider-arrow-left {
          left: 10px;
      }
      .slider-arrow-right {
          right: 10px;
      }
  }
  @media screen and (min-width: 320px) and (max-width: 619px){
      .slider-track {
          overflow: hidden;
          max-width: 160px;
      }
      .slider-arrow-left {
          left: 10px;
      }
      .slider-arrow-right {
          right: 10px;
      }
      .slider-track {
          overflow: hidden;
          max-width: 140px;
      }
  }
</style>