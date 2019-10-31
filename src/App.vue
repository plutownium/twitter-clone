<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">

		<TweetDeck v-on:messageFromTweetDeck="msgReceived($event)"/>

		<!-- <ul>
			<li v-for="(tweet, index) in tweets" :key="index">{{ tweet }}</li>
		</ul> -->

		<TwitterMsg v-for="(tweet, index) in tweets" :key="index" 
		name="rolypoly" handle="rolypoly" tsp=1 :msg="tweet" />
		<!-- ask Ben about this error: <TwitterMsg v-for="i, tweet in tweets" :key="i"/ :msg="tweet[i]"> -->

		<TwitterMsg name="rolypolyistaken" handle='rolypolyistaken'
		tsp=50 msg="hey this is a message on twitter"/>
		<TwitterMsg name="Dominii" handle="Dominii"
		tsp=36 msg="take it one small step at a time"/>
		<TwitterMsg name="Rick" handle="hiimrick" 
		tsp=108 msg="LFG dire maul"/>

		<advertisement v-on:msgFromAd="updateSomeText($event)"/>

		<input type="text" v-model="placeholderText"/>
		
	</div>
</template>

<script>
import TwitterMsg from './components/TwitterMsg.vue'
import TweetDeck from './components/TweetDeck.vue'
import Advertisement from './components/Advertisement.vue'

export default {
	name: 'app',
	components: {
		TwitterMsg,
		TweetDeck,
		Advertisement
	},

	data: function() {
		return {
			tweets: [],
			message: "",
			placeholderText: ""
		}
	},

	methods: {
		msgReceived(theTweet, name, handle) {
			this.tweets.push(theTweet, name, handle)
		},
		updateSomeText(newText) {
			this.placeholderText = newText
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
