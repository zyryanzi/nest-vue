import { createApp } from 'vue'
import App from './App.vue'

import Cookies from 'js-cookie'
import Element from 'element-ui'

import mavonEditor from 'mavon-editor'

const app = createApp(App)
app.use(Element, {
    size: Cookies.get('size') || 'small' // set element-ui default size
})
app.use(mavonEditor)
createApp(App).mount('#app')
