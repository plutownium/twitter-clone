import Messages from './components/Messages.vue'
import Settings from './components/Settings.vue'
import WholePgMsg from './components/WholePgMsg.vue'
import Homepage from './components/Homepage.vue'
import TweetDeck from './components/TweetDeck.vue'

export default [
    { path: '/', component: Homepage },
    { path: '/messages', component: Messages },
    { path: '/settings', component: Settings },
    { path: '/tweet', component: TweetDeck },
    { path: '/tweets/:id', component: WholePgMsg }
]