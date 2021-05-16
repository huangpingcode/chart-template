import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    },
    mutations: {
        setToken (state, token) {
            state.token = token
            axios.defaults.headers.common.Authorization = token
            window.localStorage.setItem('token', token)
        },
        initToken (state) {
            const token = window.localStorage.getItem('token')
            state.token = token
            axios.defaults.headers.common.Authorization = token
        }
    },
    actions: {
    },
    modules: {
    }
})
