<template>
	<div>
		<input type="text" v-model="yourName" />
		<input type="text" v-model="yourHandle" />
		<input type="text" v-model="yourTweet" />
		<v-btn @click="addTweet()" :disabled="!isLoggedIn">
			<v-icon>mdi-access-point</v-icon>Tweet
		</v-btn>
		<v-divider></v-divider>
	</div>
</template>

<script>
import { db } from "../db.js";

export default {
	name: "TweetDeck",

	data: function() {
		return {
			yourName: this.$store.state.name,
			yourHandle: this.$store.state.handle,
			yourTweet: "What's going on?"
			// testVar: this.getAcctInfo()
		};
	},

	methods: {
		addTweet() {
			db.collection("batch_one").add({
				name: this.yourName,
				handle: this.yourHandle,
				tsp: 0,
				message: this.yourTweet
			});
		},
		getAcctInfo() {
			// returns the account info associated with the user's email
			var userAccountId = this.$store.state.user;
			var firebaseUserInfo = db
				.collection("user_info")
				.doc(userAccountId);
			firebaseUserInfo.get().then(doc => {
				console.log("Here is doc.data():", doc.data());
				// doesn't return anything, just updates testVar after testVar fires the method
				// this.testVar = doc.data();
				this.$store.commit("registerUsername", doc.data().name);
				this.$store.commit("registerHandle", doc.data().handle);
			});
		}
	},
	computed: {
		isLoggedIn() {
			return this.$store.state.logged_in;
		},
		// // doesn't work as expected ... 
		// showName() {
		// 	if (this.$store.state.name) {
		// 		return this.$store.state.name
		// 	} else {
		// 		return "Your name goes here"
		// 	}
		// },
		// showHandle() {
		// 	if (this.$store.state.name) {
		// 		return this.$store.state.handle
		// 	} else {
		// 		return "Your handle goes here"
		// 	}
		// }
	}
};
</script>
