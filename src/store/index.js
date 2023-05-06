import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import promoBlock from "@/store/modules/promo-block";
import skillsBlock from "@/store/modules/skills";
import socialBlock from "@/store/modules/slider";
import postsBlock from "@/store/modules/posts"

Vue.prototype.axios = axios

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        promoBlock,
        skillsBlock,
        socialBlock,
        postsBlock
    },
})
