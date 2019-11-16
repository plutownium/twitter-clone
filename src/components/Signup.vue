<template>
	<div>
		<h3>Sign up for Fake Twitter</h3>
		<input ty holder="Email" v-model="email" />
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
import firebase from "firebase/app";
import "firebase/auth";

export default {
	name: "signup",
	data() {
		return {
			email: "Your email here",
			password: ""
		};
	},
	methods: {
		signUp() {
			this.$store.commit("setUser", this.email);
			this.$store.commit("changeSignedInStatus");
			// console.log(this.email);
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
				),
				// console.log("can u read this in console?")
				this.$router.push("pickusername"); // user selects name and handle on next pg
		}
	},
	computed: {
		signedIn() {
			return this.$store.state.signed_in;
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
