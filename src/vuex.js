import vuex from 'vuex'
import Vue from 'vue'

Vue.use(vuex)
export const vuex_store = new vuex.Store({
    state: {
        num: 1
    },
    mutations: {
        sum(state, n) {
            state.num = n;
            // console.log(n)
        }

    },
    getters:{
        list:(state) => {
            return state.num
        }
    }
}
)