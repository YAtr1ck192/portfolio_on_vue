import axios from "axios";

const skillsBlock = {
    namespaced: true,
    state: {
        skills: []
    },
    actions: {
        async GET_SKILLS({ commit }) {
            axios
                .get('/api/skills.json')
                .then(response => {
                    return response.data
                })
                .then(skills => {
                    commit('SET_SKILLS', skills)
                })
        }
    },
    mutations: {
        SET_SKILLS (state, skills) {
            state.skills = skills
        }
    },
}
export default skillsBlock