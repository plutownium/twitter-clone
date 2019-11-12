import Messages from "./components/Messages.vue";
import Settings from "./components/Settings.vue";
import SingleTweet from "./components/SingleTweet.vue";
import Homepage from "./components/Homepage.vue";
import TweetDeck from "./components/TweetDeck.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";

import Router from "vue-router";
import firebase from "firebase";

import Vue from "vue";

Vue.use(Router);

const router = new Router({
  routes: [
    { path: "*", redirect: "/" },
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
  ]
});

router.beforeEach(function(to, from, next) {
  console.log("1");
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // "if the page requires auth and there is no current user, redirect to the login page"
  if (requiresAuth && !currentUser) next("login");
  // "if the page doesn't require auth and there is a current user, go to the home page"
  else if (!requiresAuth && currentUser) next("home");
  // "otherwise, load next page"
  else next();
});

export default router;
