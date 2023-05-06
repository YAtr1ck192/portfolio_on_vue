import axios from "axios";

const skillsBlock = {
    namespaced: true,
    state: {
        skills: {}
    },
    actions: {
        async GET_SKILLS({ commit }) {
            axios
                .get('/api/skills.json')
                .then(response => {
                    const data = response.data.skills
                    commit('SET_SKILLS', data)
                })
        }
    },
    mutations: {
        SET_SKILLS (state, data) {
            state.skills = data
        }
    },
}
export default skillsBlock