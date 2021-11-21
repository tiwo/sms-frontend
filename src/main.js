import { createApp } from 'vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'

import App from './App.vue'
import { router } from './router.js'

const app = createApp(App)

app.use(router)

app.use(Quasar, {
    plugins: {},
})

app.mount('#app')
