<template>
	<div>
		<v-card>
			<h3>Log in</h3>
			<input type="text" placeholder="Email" v-model="email" />
			<br />
			<input type="password" placeholder="Password" v-model="password" />
			<br />
			<v-btn @click="login"> <v-icon>mdi-login</v-icon>Log in </v-btn>
			<p>
				No account?
				<router-link to="/signup">Create one!</router-link>
			</p>
		</v-card>
	</div>
</template>

<script>
import firebase from "firebase/app";
// import "firebase/auth";
import { db } from "../db.js";

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
			// console.log(this.$store.state.user); // starts as null
			this.$store.commit("setUser", this.email),
				this.$store.commit("changeSignedInStatus"),
				// console.log(this.$store.state.user); // changes to the input from this.email
				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.then(
						function() {
							alert("You are now logged in");
							// moved from line 65 into line 43 because it makes logical sense to fire here
							// retrieves username and handle from database by email
							var userAccountId = this.$store.state.user;
							var firebaseUserInfo = db
								.collection("user_info")
								.doc(userAccountId);
							firebaseUserInfo.get().then(doc => {
								// console.log("Here is doc.data():", doc.data());
								this.$store.commit(
									"registerUsername",
									doc.data().name
								);
								this.$store.commit(
									"registerHandle",
									doc.data().handle
								);
							});
						},
						function(error) {
							alert("oops! " + error.message);
						}
					);
			// retrieves username and handle from database by email
			// var userAccountId = this.$store.state.user;
			// var firebaseUserInfo = db
			// 	.collection("user_info")
			// 	.doc(userAccountId);
			// firebaseUserInfo.get().then(doc => {
			// 	// console.log("Here is doc.data():", doc.data());
			// 	this.$store.commit("registerUsername", doc.data().name);
			// 	this.$store.commit("registerHandle", doc.data().handle);
			// }),
			this.$router.replace("/"); // goes to homepg
		}
	}
};
</script>

<style scoped>
input {
	padding: 20px;
}
</style>
