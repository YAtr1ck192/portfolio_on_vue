const promoBlock = {
    namespaced: true,
    state: {
        linkContent: 'SCROLL TO MORE',
        linkUrl: '#skills',
        promo: []
    },
    getters: {},
    mutations: {
        SET_PROMO (state, promo) {
            state.promo = promo
        }
    },
    actions: {
        async GET_PROMO({commit}) {
            try {
                const data = await this.axios.get('/api/data.json')
                commit("SET_PROMO", data.data)
            }
            catch (error) {
                console.log(error)
            }
        }
    }
}
export default promoBlock