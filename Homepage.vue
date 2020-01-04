<template>
	<div>
		<TweetDeck></TweetDeck>

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

	data() {
		return {
			tweets: null,
			placeholderText: ""
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
		}
	}
};
</script>
