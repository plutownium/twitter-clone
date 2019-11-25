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
					<v-list-item-title>{{ name }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<!-- TODO: Add "v-if sortByAuthor, else regularDisplay" logic -->
		<TwitterMsg
			v-for="(tweet, index) in tweets"
			:key="index"
			:name="tweet.name"
			:handle="tweet.handle"
			:tsp="tweet.tsp"
			:msg="tweet.message"
			:id="tweet.id"
		/>

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
			display_authorName: this.sortByAuthor()
		};
	},

	firestore: {
		tweets: db.collection("batch_one")
	},

	methods: {
		// msgReceived(childData) {
		// 	this.tweets.push(childData);
		// },
		// note: Above method was previously used to receive info from TweetDeck
		updateSomeText(newText) {
			this.placeholderText = newText;
		},
		sortByAuthor(name) {
			// TODO: show only tweets made by the Name parameter
			this.display_sortByAuthor = true;
			return name;
		}
		// getNames() {
			// TODO: Access Firebase database and pull list of usernames, send it to data()
			// return ["All", "hiimrick", "Dominii", "rolypolyistaken"];
		}
	},
	computed: {
		getNames() {
			var simpleArray = [];
			db.collection("user_info")
				.get()
				.then(function(querySnapshot) {
					querySnapshot.forEach(function(doc) {
						// console.log(doc.id, " => ", doc.data());
						simpleArray.push(doc.id);
					});
					console.log("Inside then simpleArray: ", simpleArray);
					return simpleArray;
				});
			// console.log("Testing: ", simpleArray);
		}
	}
};
</script>
