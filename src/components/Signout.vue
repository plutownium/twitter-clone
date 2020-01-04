<template>
	<div>
		<h3>Sign out of your account</h3>
		<v-btn @click="signOut"> <v-icon>mdi-door-open</v-icon>Sign Out </v-btn>
		<p></p>
		<router-link to="/signup">Sign up.</router-link>
		<router-link to="/login">Log In.</router-link>
	</div>
</template>

<script>
import firebase from "firebase";

export default {
	name: "signout",
	data() {
		return {};
	},
	methods: {
		signOut() {
			firebase
				.auth()
				.signOut()
				.then(() => {
					alert("Logged out!");
					this.$router.replace({
						name: "Home"
					});
				});
			// onclick should revert state to default uwu
			this.$store.commit("resetForSignout");
		}
	},
	computed: {
		toSignOut() {
			console.log(this.$store.state.signed_in);
			return this.$store.state.signed_in;
		}
	}
};
</script>

<style></style>
