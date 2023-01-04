import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import plugin from '@/global'
import 'github-markdown-css'

createApp(App).use(router).use(plugin).mount('#app')
