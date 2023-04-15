<template>
    <section id="skills" class="skills-block default-block container">
        <h2 class="block-title">Skills</h2>
        <div class="skill-cards">
            <SkillCard
                :card="item"
                v-for="item in items"
                :key="item"
            />
        </div>
    </section>
</template>

<script>
import SkillCard from '../components/skill-card.vue';
export default {
    name: "skills-block",
    components: {
        SkillCard,
    },
    data () {
        return {
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
            ]
        }
    }
}

</script>

<style scoped>
.skills-block {
    margin-top: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
}
.skill-cards{
    width: 100%;
    max-width: 940px;
}
.card-desc p {
    max-width: 750px;
    font-size: 16px;
    font-family: "rr";
    color: #363940;
    margin-bottom: 20px;
}
.block-title {
    font-size: 36px;
    color: #363940;
    font-family: "rm";
    margin: 100px 0 40px;
}
.skill-cards{
    width: 100%;
    max-width: 940px;
}
@media screen and (min-width: 620px) and (max-width: 819px) {
    .card-desc p{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    .skills-block {
        margin-top: 100px;
    }
}
@media screen and (min-width: 320px) and (max-width: 619px){
    .card-desc p{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    .skills-block {
        margin-top: 176px;
    }
    .skill-cards {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
}
</style>
