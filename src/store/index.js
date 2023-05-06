import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import promoBlock from "@/store/modules/promo-block";
import skillsBlock from "@/store/modules/skills";
import socialBlock from "@/store/modules/slider";

Vue.prototype.axios = axios

Vue.use(Vuex)

export default new Vuex.Store({
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

    modules: {
        promoBlock,
        skillsBlock,
        socialBlock
    },
})