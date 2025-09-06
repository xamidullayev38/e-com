import { createApp } from 'vue'
import './assets/style/main.css'
import App from './App.vue'
import router from './router/index'

//  normalize css cross browser uchun 
import 'normalize.css'

createApp(App).use(router).mount('#app')
