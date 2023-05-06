import Vue from 'vue'
import Vuex from 'vuex'
import promoBlock from "@/store/modules/promo-block";
import axios from "axios";

Vue.prototype.axios = axios

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {

    },
    modules: {
        promoBlock
    }
})