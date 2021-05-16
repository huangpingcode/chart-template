import Vue from 'vue'
import './style/index.scss'
import './components/element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

store.commit('initToken')

axios.defaults.baseURL = '/api'

// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error)
// })

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    const data = response.data
    if (!data || !data.success) {
        // eslint-disable-next-line eqeqeq
        if (data.code == '401') {
            router.push('/login')
        }
        return Promise.reject(data)
    }
    return data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
