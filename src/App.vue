<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="(sl, index) in sidebar_links" :key="index" link>
          <v-list-item-action>
            <v-icon>{{ sl.icon }}</v-icon>
          </v-list-item-action>

          <router-link :to="sl.to">{{sl.text}}</router-link>
        </v-list-item>
        <v-list-item v-if='username'>Logged in as {{ username }}</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Fake Twitter</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <v-divider></v-divider>
      <!-- <advertisement></advertisement> -->
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
// import Advertisement from './components/Advertisement.vue'

export default {
  // components: { Advertisement },
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    sidebar_links: [
      { to: { name: "Home" }, text: "homepage", icon: "mdi-message-text" },
      { to: { name: "DMs" }, text: "messages", icon: "mdi-access-point" },
      { to: { name: "Settings" }, text: "settings", icon: "mdi-settings-outline" },
      { to: { name: "Tweet" }, text: "Send a tweet", icon: "mdi-send-outline" },
      { to: { name: "Login" }, text: "Log In", icon: "mdi-login" },
      { to: { name: "Sign up" },text: "Sign up", icon: "mdi-account-heart-outline" },
      { to: { name: "Sign out" }, text: "Sign out", icon: "mdi-door-open" }
    ]
  }),
  computed: {
    username() {
      return this.$store.state.user
    }
  }
};
</script>