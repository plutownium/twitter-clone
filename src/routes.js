import Messages from "./components/Messages.vue";
import Settings from "./components/Settings.vue";
import SingleTweet from "./components/SingleTweet.vue";
import Homepage from "./components/Homepage.vue";
import TweetDeck from "./components/TweetDeck.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";

export default [
  { path: "/", name: "Home", component: Homepage },
  { path: "/messages", name: "DMs", component: Messages },
  { path: "/settings", name: "Settings", component: Settings },
  {
    path: "/tweet",
    name: "Tweet",
    component: TweetDeck,
    meta: { requiresAuth: true }
  },
  { path: "/tweets/:id", name: "SingleTweet", component: SingleTweet },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup }
];
