import axios from "axios";

const post = {
    namespaced: true,
    state: {
        post: {}
    },
    actions: {
        async GET_POST({ commit }) {
            axios
                .get('/api/posts.json')
                .then(response => {
                    const data = response.data.posts
                    commit('SET_POST', data)
                })
        }
    },
    mutations: {
        SET_POST(state, data) {
            state.post = data.content
        }
    },
}
export default post