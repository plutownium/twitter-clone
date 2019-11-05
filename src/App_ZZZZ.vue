<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">

		<TweetDeck @messageFromTweetDeck="tweetDeckMsgReceived"/>

		<TwitterMsg v-for="i, tweet_data in shownTweets" :key="i" 
		:message="tweet_data.message" :name="tweet_data.name">
		
	</div>
</template>

<script>
import TwitterMsg from './components/TwitterMsg.vue'
import TweetDeck from './components/TweetDeck.vue'

export default {
	name: 'app',
	components: {
		TwitterMsg,
		TweetDeck
	},

	computed: {
        shownTweets() {
            return tweets[this.tweet_index]
        }
    },

	data: function() {
		return {
			tweet: "",
			message: ""
		},
		tweet_index = 0,
        tweets = [
             {name: "Roland", handle: "Roly", message: "Ben IS Awesome"},
             {name: "Dominii_is_the_best", handle: "Dom", message: "Ywep"},
        ]
		
	},

	methods: {
		tweetDeckMsgReceived() {
			
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
