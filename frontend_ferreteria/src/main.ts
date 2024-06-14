// import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faPlus, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
library.add(faPlus, faEdit, faTrash, faSave)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
// import 'bootstrap/dist/js/bootstrap.min.js'
