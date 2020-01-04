<template>
	<div>
		<p>You made it to the Settings page.</p>

		<h3>Display name</h3>
		<input type="text" v-model="name" />
		<h3>Handle</h3>
		<input type="text" v-model="handle" />
		<v-btn @click="changeUserInfo()">Change Info</v-btn>

		<p>Your account's email is: {{ user }}</p>
		<a href="/#/messages">Go to Messages</a>
		<br />
		<a href="/">Go back to Home</a>
		<!-- <p>Still Settings</p> -->
	</div>
</template>

<script>
import { db } from "../db.js";

export default {
	data() {
		return {
			user: this.$store.state.user,
			name: this.displayUsername(),
			handle: this.displayUserHandle()
			// Alternatively...
			// db.collection("user_info").doc("base_name").get().then(function(doc) => return doc.data())
			// ... Something like that.
		};
	},
	methods: {
		changeUserInfo() {
			var oldName = this.$store.state.user;
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
		changePassword() {}
	},
	computed: {}
};
</script>

<style scoped></style>
