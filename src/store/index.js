import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import promoBlock from "@/store/modules/promo-block";


Vue.prototype.axios = axios

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        promo: []
    },
/*
    actions: {
        /!*async GET_PROMO({ commit }) {
            axios
            .get('/api/data.json')
            .then(response => {
                return response.data.promo
                /!*this.promo = response.data.promo
                this.skills = response.data.skills
                this.social = response.data.social
                this.posts = response.data.posts*!/
            })
            .then(promo => {
                commit('SET_PROMO', promo)
            })
        }*!/
    },
*/
    actions: {
        async GET_PROMO({ commit }) {
            axios
                .get('/api/promo.json')
                .then(response => {
                    return response.data.promo
                })
                .then(data => {
                    commit('SET_PROMO', data)
                })
        }
    },
    mutations: {
        SET_PROMO (state, data) {
            state.promo = data
        }
    },
    modules: {
        promoBlock,
    },
})