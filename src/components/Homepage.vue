<template>
	<div>
		<TweetDeck></TweetDeck>

		<v-menu offset-y>
			<template v-slot:activator="{ on }">
				<v-btn color="primary" dark v-on="on">
					Dropdown
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
		<!-- TODO: Add "v-if sortByAuthor, else regularDisplay" logic -->
		<div v-if="display_sortByAuthor">
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
		<div v-if="!display_sortByAuthor">
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
			names: this.getNames(), // TODO: Send data from here to the dropdown menu up above
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
		sortByAuthor() {
			// set to "name" for first arg when progressing
			// TODO: show only tweets made by the Name parameter
			// this.display_sortByAuthor = true;
			// return name;

			var retrievedName = "hiimrick"; // string, hardcoded for now
			var tweets_list = [];
			let self = this;
			db.collection("batch_one")
				.where("handle", "==", retrievedName)
				.get()
				.then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
						// doc.data() is never undefined for query doc snapshots
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
			// TODO: Access Firebase database and pull list of usernames, send it to data()
			// return ["All", "hiimrick", "Dominii", "rolypolyistaken"];
			var simpleArray = [];
			let self = this;
			db.collection("user_info")
				.get()
				.then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
						// console.log(doc.id, " => ", doc.data());
						simpleArray.push(doc.data().handle);
					});
					console.log("Inside then simpleArray: ", simpleArray);
					self.names = simpleArray;
					// return simpleArray;
				});
		}
	}
};
</script>
