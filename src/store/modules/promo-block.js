import axios from "axios";

const promoBlock = {
    namespaced: true,
    state: {
        linkContent: 'SCROLL TO MORE',
        linkUrl: '#skills',
        promo: {}
    },
    actions: {
        async GET_PROMO({ commit }) {
            axios
                .get('/api/promo.json')
                .then(response => {
                    const data = response.data.promo
                    commit('SET_PROMO', data)
                })
        }
    },
    mutations: {
        SET_PROMO (state, data) {
            state.promo = data
        }
    },
}
export default promoBlock