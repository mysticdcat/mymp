import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        usingComponents: {
            "i-message": "/ui/iview/message/index",
        },
    }
}
