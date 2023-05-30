import { createApp } from 'vue'
import App from './App.vue'
import BoardServiceHttp from './services/BoardServiceHttp'

const app = createApp(App)
app.provide("boardService", new BoardServiceHttp());
app.mount('#app')
