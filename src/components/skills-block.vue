<template>
    <section id="skills" class="skills-block default-block container">
        <h2 class="block-title">{{ skills.title }}</h2>
        <skillCards :skills="skills"/>
    </section>
</template>

<script>

import SkillCards from '../components/skill-cards.vue';
import {mapActions, mapState} from "vuex";
export default {
    name: "skills-block",
    computed: {
        ...mapState('skillsBlock', {
            skills: "skills"
        })
    },
    methods: {
        ...mapActions('skillsBlock', ['GET_SKILLS'])
    },
    components: {
        SkillCards,
    },
    created() {
        this.GET_SKILLS()
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

}

</style>
