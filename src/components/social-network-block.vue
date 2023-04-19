<template>
    <div id="social" class="social-networks-block container">
        <h2 class="block-title">{{ blockTitle }}</h2>
        <div class="social-networks-subtitle small-p">
            {{ blockSubtitle }}
        </div>
        <SliderWrapper />
    </div>
</template>

<script>

import SliderWrapper from "@/components/SliderWrapper.vue";
export default {
    name: "social-network-block",
    data() {
        return {
            blockTitle:'My social networks',
            blockSubtitle:'There are many reasons to get down and start to get depressed about your situation.',
        }
    },
    components: {
        SliderWrapper
    }
}
</script>

<style scoped>

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

  @media screen and (min-width: 1001px) and (max-width: 1200px){
      sliderWrapper {
          overflow: hidden;
          max-width: 460px;
      }
  }
  @media screen and (min-width: 941px) and (max-width: 1000px) {
      sliderWrapper {
          overflow: hidden;
          max-width: 460px;
      }
  }
  @media screen and (min-width: 820px) and (max-width: 940px) {
      sliderWrapper {
          overflow: hidden;
          max-width: 460px;
      }
  }
  @media screen and (min-width: 620px) and (max-width: 819px) {
      sliderWrapper {
          overflow: hidden;
          max-width: 460px;
      }

  }
  @media screen and (min-width: 320px) and (max-width: 619px){

      sliderWrapper {
          overflow: hidden;
          max-width: 140px;
      }
  }
</style>