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
			var self = this; // https://stackoverflow.com/questions/46335667/vuex-cannot-read-property-store-of-undefined
			// halfway down the pg at "The typical solution [...] is to create a temporary variable outside the function then use it inside the function"
			this.$store.commit("setUser", this.email),
				this.$store.commit("changeSignedInStatus"),
				// console.log(56);
				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.then(
						function() {
							alert("You are now logged in");
							// moved from line 65 into line 43 because it should only happen on successful login
							// retrieves username and handle from database by email
							// console.log(
							// 	"Here is your variable: ",
							// 	self.$store.state.user
							// );
							var userAccountId = self.$store.state.user;
							var firebaseUserInfo = db
								.collection("user_info")
								.doc(userAccountId);
							// console.log(57);
							firebaseUserInfo.get().then(doc => {
								self.$store.commit(
									"registerUsername",
									doc.data().name
								);
								self.$store.commit(
									"registerHandle",
									doc.data().handle
								);
							});
						},
						function(error) {
							alert("oops! " + error.message);
						}
					);
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
