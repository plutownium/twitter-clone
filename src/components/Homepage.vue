<template>
	<div>
		<TweetDeck></TweetDeck>

		<v-menu open-on-hover offset-y>
			<template v-slot:activator="{ on }">
				<v-btn color="primary" dark v-on="on">
					Filter by User
				</v-btn>
			</template>
			<v-list>
				<v-list-item
					v-for="(name, index) in names"
					:key="index"
					@click="sortByAuthor(name)"
				>
					<v-list-item-title @click="sortByAuthor(name)">{{
						name
					}}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<div v-if="!display_sortByAuthor">
			<TwitterMsg
				v-for="(tweet, index) in tweets"
				:key="index"
				:name="tweet.name"
				:handle="tweet.handle"
				:tsp="tweet.tsp"
				:msg="tweet.message"
				:id="tweet.id"
			/>
		</div>
		<div v-if="display_sortByAuthor">
			<TwitterMsg
				v-for="(tweet, index) in tweets_byAuthorName"
				:key="index"
				:name="tweet.name"
				:handle="tweet.handle"
				:tsp="tweet.tsp"
				:msg="tweet.message"
				:id="tweet.id"
			/>
		</div>

		<advertisement v-on:msgFromAd="updateSomeText($event)" />

		<input type="text" v-model="placeholderText" />
	</div>
</template>

<script>
import TwitterMsg from "./TwitterMsg.vue";
import TweetDeck from "./TweetDeck.vue";
import Advertisement from "./Advertisement.vue";
import { db } from "../db";

export default {
	name: "homepage",
	components: {
		TwitterMsg,
		TweetDeck,
		Advertisement
	},

	data: function() {
		return {
			tweets: null,
			placeholderText: "",
			names: this.getNames(),
			display_sortByAuthor: false,
			tweets_byAuthorName: this.sortByAuthor(name)
		};
	},

	firestore: {
		tweets: db.collection("batch_one")
	},

	methods: {
		updateSomeText(newText) {
			this.placeholderText = newText;
		},
		sortByAuthor(name) {
			if (name === "All") {
				this.display_sortByAuthor = false;
			} else {
				this.display_sortByAuthor = true;
			}

			var retrievedName = name; // string
			var tweets_list = [];
			let self = this;
			db.collection("batch_one")
				.where("handle", "==", retrievedName)
				.get()
				.then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
						console.log(doc.id, " => ", doc.data());
						tweets_list.push(doc.data());
					});
					self.tweets_byAuthorName = tweets_list;
				})
				.catch(function(error) {
					console.log("Error getting documents: ", error);
				});
		},
		getNames() {
			var simpleArray = ["All"];
			let self = this;
			db.collection("user_info")
				.get()
				.then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
						simpleArray.push(doc.data().handle);
					});
					// console.log("Inside then simpleArray: ", simpleArray);
					self.names = simpleArray;
				});
		}
	}
};
</script>
