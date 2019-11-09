import Messages from './components/Messages.vue'
import Settings from './components/Settings.vue'
import WholePgMsg from './components/WholePgMsg.vue'
import Homepage from './components/Homepage.vue'
import TweetDeck from './components/TweetDeck.vue'

export default [
    { path: '/', name: "Home", component: Homepage },
    { path: '/messages', name: "DMs", component: Messages },
    { path: '/settings', name: "Settings", component: Settings },
    { path: '/tweet', name: "Tweet", component: TweetDeck },
    { path: '/tweets/:id', name: "SingleTweet", component: WholePgMsg }

]