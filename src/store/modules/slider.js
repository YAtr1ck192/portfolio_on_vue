import axios from "axios";

const socialBlock = {
    namespaced: true,
    state: {
        social: {}
    },
    actions: {
        async GET_SOCIAL({ commit }) {
            axios
                .get('/api/social.json')
                .then(response => {
                    const data = response.data.social
                    commit('SET_SOCIAL', data)
                })
        }
    },
    mutations: {
        SET_SOCIAL (state, data) {
            state.social = data
        }
    },
}
export default socialBlock
