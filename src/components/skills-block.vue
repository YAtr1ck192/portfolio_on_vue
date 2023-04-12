<template>
    <section id="skills" class="skills-block default-block container">
        <h2 class="block-title">Skills</h2>
        <div class="skill-cards">
            <SkillCard :card-title="skill.cardTitle" v-for="skill in items" :key="skill" />
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
                { skill: SkillCard, cardTitle: 'Html'},
                { skill: SkillCard, cardTitle: 'CSS'},
                { skill: SkillCard, cardTitle: 'Java Script'},
                { skill: SkillCard, cardTitle: 'Vue'},
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

.top-item-skill-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 19px 25px 20px 25px;
}
.card-title {
    font-size: 18px;
    color: #363940;
    font-family: "rm";
}
.skill-cards{
    width: 100%;
    max-width: 940px;
}
.skill-card {
    border: solid 1px #E1E5EE;
    border-radius: 4px;
    margin-bottom: 20px;
    cursor: pointer;
}
.active-card {
    border: solid 1px #6E38F7;
}
.card-desc {
    display: none /*block*/;
    transition: .9s ease-in-out;
    padding: 0 25px 0 25px;

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
}
.block-title {
    font-size: 36px;
    color: #363940;
    font-family: "rm";
    margin: 100px 0 40px;
}
.top-item-skill-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 19px 25px 20px 25px;
}
.card-title {
    font-size: 18px;
    color: #363940;
    font-family: "rm";
}
.skill-cards{
    width: 100%;
    max-width: 940px;
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
    .skills-block {
        margin-top: 100px;
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
    .skills-block {
        margin-top: 176px;
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
</style>