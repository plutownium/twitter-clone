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
		};
	},

	methods: {
		addTweet() {
			// send tweet to database while assigning a tweetId value
			// var tweetId = (Math.random() * 100000).toFixed(0);
			var self = this;
			let tweetId;
			db
				.collection("batch_one")
				.add({
					name: this.yourName,
					handle: this.yourHandle,
					tsp: 0,
					message: this.yourTweet
					// tweetId: tweetId
				})
				.then(docRef => {
					console.log("Successfully used: ", docRef);
					tweetId = docRef.id;
				})
				.catch(),
				alert("Tweet sent!");
			console.log("Here is tweetId: ", tweetId);
			// pull existing userAccount and list of associated TweetIds from database
			var firebaseUserAccount = db
				.collection("user_info")
				.doc(this.$store.state.userId); // get the user's account from the database
			firebaseUserAccount
				.get()
				.then(function(doc) {
					if (doc.exists) {
						console.log(100);
						// self.$store.commit("editHolder", doc.data());
						self.updateUserTweets(tweetId, doc.data());
						// console.log(doc.data())
					} else {
						console.log("No such document!");
					}
				})
				.catch(function(error) {
					console.log("Error getting doc: ", error);
				});
			// Promise.all([test1]).then(variable => {
			// 	console.log("VARIABLE: ", variable);
			// 	var userData = this.$store.state.holder;
			// 	console.log("98. Here is UserData:", userData);
			// });
			// // TODO: Solve bug where var userData is set before the above then() [code 100] sends its self.$store.commit("editHolder")
			// var userData = this.$store.state.holder;
			// console.log("199. Here is userData.name", userData.name);

			// start adding the new entry with the overwritten TweetIds values.
			// add to db differently if there is already associated tweetIds or not.
			// TODO: Add tweetId to associated account in user_info
		},
		updateUserTweets(tweetId, userData) {
			if (userData.tweetIds) {
				// RETURNS TRUE IF THERE IS SUCH A KEY
				// "IF there is already tweetIds associated w/ account..."
				console.log(200);
				var tweetIdsToAdd = userData["tweetIds"] + tweetId; // want a list of tweetIds
				db.collection("user_info")
					.doc(this.$store.state.userId)
					.set({
						name: userData.name,
						handle: userData.handle,
						tweetIds: tweetIdsToAdd
					})
					.then(function() {
						console.log("Document successfully written!");
					})
					.catch(function(error) {
						console.log("There was a bug: ", error);
					});
			} else {
				// "If there is NOT already tweetIds associated w/ account..."
				console.log(300);
				db.collection("user_info")
					.doc(this.$store.state.userId)
					.set({
						name: userData.name,
						handle: userData.handle,
						tweetIds: [tweetId] // "...then add the ID of the Tweet that was just sent"
					})
					.then(function() {
						console.log("Document successfully written!");
					})
					.catch(function(error) {
						console.log("There was a bug: ", error);
					});
			}
		},
		getAcctInfo() {
			// returns the account info associated with the user's email
			var userAccountId = this.$store.state.userId;
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
