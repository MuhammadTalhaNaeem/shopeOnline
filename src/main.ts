import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import VueAxios from 'vue-axios'
import Store  from './store/index'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import VueSplide  from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
library.add(fas,far,fab)

const app = createApp(App)
app.use(router)
app.use(Store)
app.use(VueAxios,axios)
app.component("font-awesome-icon",FontAwesomeIcon)
app.use(VueSplide)

app.mount('#app')
