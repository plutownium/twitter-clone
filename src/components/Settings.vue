<template>
	<div>
		<p>You made it to the Settings page.</p>

		<h3>Display name</h3>
		<input type="text" v-model="name" />
		<h3>Handle</h3>
		<input type="text" v-model="handle" />
		<v-btn @click="changeUserInfo()">Change Info</v-btn>

		<p>Your account's email is: {{ user }}</p>

		<h3>Password</h3>
		<input type="password" v-model="oldPassword" />

		<h3>Set a new password</h3>
		<input type="password" v-model="newPassword" />

		<v-btn @click="changePassword()">Change Password</v-btn>

		<br />

		<a href="/#/messages">Go to Messages</a>
		<br />
		<a href="/">Go back to Home</a>
		<!-- <p>Still Settings</p> -->
	</div>
</template>

<script>
import * as firebase from "firebase";
import { db } from "../db.js";

export default {
	data() {
		return {
			user: this.$store.state.userId,
			name: this.displayUsername(),
			handle: this.displayUserHandle(),
			oldPassword: "",
			newPassword: ""
			// Alternatively...
			// db.collection("user_info").doc("base_name").get().then(function(doc) => return doc.data())
			// ... Something like that.
		};
	},
	methods: {
		changeUserInfo() {
			var oldName = this.$store.state.userId;
			var newName = this.name;
			var newHandle = this.handle;
			this.$store.commit("changeUsername", newName);
			this.$store.commit("changeUserHandle", newHandle); // updates state to store new name
			// console.log(54);
			db.collection("user_info")
				.doc(oldName)
				.set({
					name: newName,
					handle: newHandle
				})
				.then(function() {
					console.log("New name successfully set!");
				})
				.catch(function(error) {
					console.log("There was an error: ", error);
				});
		},
		displayUsername() {
			return this.$store.state.name;
		},
		displayUserHandle() {
			return this.$store.state.handle;
		},
		changePassword() {
			let self = this;
			var user = firebase.auth().currentUser;
			var credential = firebase.auth.EmailAuthProvider.credential(
				this.$store.state.userId,
				this.oldPassword
			);

			user.reauthenticateWithCredential(credential)
				.then(function() {
					// User re-authenticated.
					user.updatePassword(self.newPassword)
						.then(function() {
							console.log("Password update successful!");
						})
						.catch(function(error) {
							console.log(
								"An error occcurred while changing the password:",
								error
							);
						});
				})
				.catch(function(error) {
					console.log("Some kinda bug: ", error);
					// An error happened.
				});
			console.log("User: ", user);
			console.log("email: ", user.email);
		}
	},
	computed: {}
};
</script>

<style scoped></style>
