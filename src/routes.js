import Messages from './components/Messages.vue'
import Settings from './components/Settings.vue'
import WholePgMsg from './components/WholePgMsg.vue'

export default [
    // { path: '/', component: Homepage }
    { path: '/messages', component: Messages },
    { path: '/settings', component: Settings },
    { path: '/tweets/:id', component: WholePgMsg }
]