import axios from "axios";

const allPostsBlock = {
    namespaced: true,
    state: {
        posts: {}
    },
    actions: {
        async GET_POSTS({ commit }) {
            axios
                .get('/api/posts.json')
                .then(response => {
                    const data = response.data.posts
                    commit('SET_POSTS', data)
                })
        }
    },
    mutations: {
        SET_POSTS(state, data) {
            state.posts = data.content
        }
    },
}
export default allPostsBlock