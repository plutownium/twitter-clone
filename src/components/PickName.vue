<template>
	<div>
		<input type="text" placeholder="text" v-model="name" />
			<br />
		<input type="text" placeholder="text" v-model="handle" />
			<br />
		<v-btn @click="select">Select Username and Handle</v-btn>
	</div>
</template>

<script>
import { db } from "../db.js";

export default {
	data() {
		return {
			name: "username",
			handle: "handle"
		};
	},
	methods: {
		test() {
			console.log("TEST!")
		},
		select() {
			this.$store.commit('registerUsername', this.name);
			this.$store.commit('registerHandle', this.handle);
			var docname = this.$store.state.userId
			console.log("here is docname: ", docname)
			db.collection("user_info").doc(docname).set({
				email: docname,
				name: this.$store.state.name,
				handle: this.$store.state.handle
			}).then(function() {
				console.log("User info successfully added!")
			}).catch(function(error) {
				console.log("Error: ", error)
			})
			this.$router.replace("/")
		}
	}
};
</script>
