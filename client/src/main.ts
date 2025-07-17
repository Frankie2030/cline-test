import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'
import LobbyView from './views/LobbyView.vue'
import GameView from './views/GameView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/lobby', component: LobbyView },
    { path: '/game', component: GameView }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
