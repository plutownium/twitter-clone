<template>
  <div>
    <h3>Sign up for Fake Twitter</h3>
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Password" v-model="password" />
    <br />
    <v-btn @click="signUp">
      <v-icon>mdi-account-heart-outline</v-icon>sign up
    </v-btn>
    <p>
      No account? Create one! Or go to
      <router-link to="/login">login.</router-link>
    </p>
  </div>
</template>

<script>
// import firebase from "firebase/auth";
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
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function() {
            alert("Your account has been created!");
          },
          function(error) {
            alert("Oops" + error.message);
          }
        );
    }
  }
};
</script>

<style>
input {
  padding: 20px;
}
p {
  padding: 10px;
}
</style>