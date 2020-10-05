import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://192.168.0.108:3000',{a:'aaa'}),
}))

new Vue({
    render: h => h(App)
}).$mount('#app')
