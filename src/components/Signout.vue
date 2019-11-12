<template>
  <div>
    <h3>Sign out of your account</h3>
    <v-btn @click="signOut">
      <v-icon>mdi-door-open</v-icon>Sign Out
    </v-btn>
    <p>
    </p>
    <router-link to="/signup">Sign up.</router-link>
    <router-link to="/login">Login.</router-link>
  </div>
</template>

<script>
// import firebase from "firebase/app";
// import "firebase/auth";

export default {
  name: "signout",
  data() {
    return {};
  },
  methods: {
    signOut() {}
  }
};
</script>

<style>

</style>