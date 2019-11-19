<template>
	<div>
		<!-- <input type="text" v-model="yourName" />
		<input type="text" v-model="yourHandle" /> -->
		<!-- <input type="text" v-model="yourTweet" /> -->
		<v-container>
			<v-row>
				<v-col cols="6" sm="2">
					<v-text-field
						counter="20"
						label="Regular"
						v-model="yourName"
						full-width
					></v-text-field>
				</v-col>
				<v-col cols="6" sm="2">
					<v-text-field
						counter="20"
						label="Regular"
						v-model="yourHandle"
						full-width
					></v-text-field>
				</v-col>
				<v-col cols="6" sm="5">
					<v-text-field
						counter="140"
						label="Regular"
						v-model="yourTweet"
						full-width
					></v-text-field>
					<v-col cols="6" sm="4">
						<v-btn @click="addTweet()" :disabled="!canTweet">
							<v-icon>mdi-access-point</v-icon>Tweet
						</v-btn>
					</v-col>
				</v-col>
			</v-row>
		</v-container>
		<v-divider></v-divider>
	</div>
</template>

<script>
import { db } from "../db.js";

export default {
	name: "TweetDeck",

	data: function() {
		return {
			yourName: this.showName(),
			yourHandle: this.showHandle(),
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
		},
		showName() {
			if (this.$store.state.name) {
				return this.$store.state.name;
			} else {
				// this.yourName = "Your name goes here"
				return "Name goes here";
			}
		},
		showHandle() {
			if (this.$store.state.name) {
				return this.$store.state.handle;
			} else {
				// this.yourHandle = "Your handle goes here"
				return "Handle goes here";
			}
		}
	},
	computed: {
		isLoggedIn() {
			// return this.$store.state.logged_in;
			if (this.$store.state.logged_in) {
				return true;
			} else {
				return false;
			}
		},
		isOver140() {
			if (this.yourTweet.length < 140) {
				return false;
			} else {
				return true;
			}
		},
		canTweet() {
			if (this.$store.state.logged_in && this.yourTweet.length < 140) {
				return true;
			} else {
				return false;
			}
		}
	}
};
</script>
