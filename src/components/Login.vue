<template>
  <div>
    <v-card>
      <h3>Log in</h3>
      <input type="text" placeholder="Email" v-model="email" />
      <br />
      <input type="password" placeholder="Password" v-model="password" />
      <br />
      <v-btn @click="login">
        <v-icon>mdi-login</v-icon>Log in
      </v-btn>
      <p>
        No account?
        <router-link to="/signup">Create one!</router-link>
      </p>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function() {
            alert("You are now logged in");
          },
          function(error) {
            alert("oops! " + error.message);
          }
        );
      this.$router.replace("/");
    }
  }
};
</script>

<style>
input {
  padding: 20px;
}
</style>