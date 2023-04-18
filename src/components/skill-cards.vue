<template>
    <div class="skill-cards">
        <div
                :class="['skill-card', {'active-card': index === activeIndex}]"
                v-for="(item, index) in items"
                :key="index"
        >
            <div @click="toggleAccordion(index)" class="top-item-skill-card" >
                <div class="card-title">{{ item.cardTitle }}</div>
                <button class="skill-card-button">
                    <img
                            :src="`/images/${index === activeIndex ? 'minus-accordion' : 'plus-accordion'}.png`"
                            alt="plus/minus"
                    >
                </button>
            </div>
            <div v-show="index === activeIndex" class="card-desc">
                <p>
                    {{ item.cardFirstText }}
                </p>
                <p>
                    {{ item.cardSecondText }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "skill-cards",
    data () {
        return {
            activeIndex: null,
            items: [
                {
                    cardFirstText: 'Do you sometimes have the feeling that you’re running into the same obstacles over and over again? ' +
                        'Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how ' +
                        'I wound up in the same place. ',
                    cardSecondText: 'The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living' +
                        ' and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people;' +
                        ' I know it speaks volumes to me. “Autobiography in Five Chapters”',
                    cardTitle: 'Html'
                },
                {
                    cardFirstText: 'Do you sometimes have the feeling that you’re running into the same obstacles over and over again? ' +
                        'Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how ' +
                        'I wound up in the same place. ',
                    cardSecondText: 'The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living' +
                        ' and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people;' +
                        ' I know it speaks volumes to me. “Autobiography in Five Chapters”',
                    cardTitle: 'CSS'
                },
                {
                    cardFirstText: 'Do you sometimes have the feeling that you’re running into the same obstacles over and over again? ' +
                        'Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how ' +
                        'I wound up in the same place. ',
                    cardSecondText: 'The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living' +
                        ' and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people;' +
                        ' I know it speaks volumes to me. “Autobiography in Five Chapters”',
                    cardTitle: 'Java Script'
                },
                {
                    cardFirstText: 'Do you sometimes have the feeling that you’re running into the same obstacles over and over again? ' +
                        'Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how ' +
                        'I wound up in the same place. ',
                    cardSecondText: 'The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living' +
                        ' and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people;' +
                        ' I know it speaks volumes to me. “Autobiography in Five Chapters”',
                    cardTitle: 'Vue'
                },
            ],
        }
    },
    methods: {
        toggleAccordion (index) {
            if (this.activeIndex === index) {
                this.activeIndex = null
            } else {
                this.activeIndex = index
            }
        }
    },
}
</script>

<style scoped>
    .skill-cards{
        width: 100%;
        max-width: 940px;
    }
    .skill-card {
        border: solid 1px #E1E5EE;
        border-radius: 4px;
        margin-bottom: 20px;
        cursor: auto;
        animation: card .6s forwards;
    }
    .card-desc {
        transition: .9s ease-in-out;
        padding: 0 25px 0 25px;
        cursor: auto;
        animation: card-desc .6s forwards;
    }
    .card-desc p {
        max-width: 750px;
        font-size: 16px;
        font-family: "rr";
        color: #363940;
        margin-bottom: 20px;
    }
    .skill-card-button {
        border: none;
        color: #6E38F7;
        font-family: "rb";
        background: transparent;
        cursor: pointer;
    }
    .top-item-skill-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 19px 25px 20px 25px;
        cursor: pointer;
    }
    .card-title {
        font-size: 18px;
        color: #363940;
        font-family: "rm";
    }
    .active-card {
      border: solid 1px #6E38F7;
    }
    @media screen and (min-width: 620px) and (max-width: 819px) {
        .card-desc {
            overflow: scroll;
            overflow-x:hidden;
            height: 172px;
        }
        .card-desc p{
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 619px){
        .card-desc {
            overflow: scroll;
            overflow-x:hidden;
            height: 172px;
        }
        .card-desc p{
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
        }
        .skill-card {
            width: 288px;
        }
        .skill-cards {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }
    @keyframes card-desc {
        0% {
            transform: translateY(-5px);
            opacity: .9;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>
