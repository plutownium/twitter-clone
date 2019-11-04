<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">

		<TweetDeck v-on:messageFromTweetDeck="msgReceived"/>

		<TwitterMsg v-for="(tweet, index) in $tweets" :key="index" 
		:name="tweet.name" :handle="tweet.handle" tsp=4 :msg="tweet.tweet" :id='tweet.id' />

		<!-- <TwitterMsg name="rolypolyistaken" handle='rolypolyistaken'
		tsp=50 msg="hey this is a message on twitter"/>
		<TwitterMsg name="Dominii" handle="Dominii"
		tsp=36 msg="take it one small step at a time"/> -->

		<advertisement v-on:msgFromAd="updateSomeText($event)"/>

		<input type="text" v-model="placeholderText"/>
		<router-view></router-view>
		
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
			tweets: [
				{name: 'rolypolyistaken', handle: 'rolypolyistaken', tweet: 'this is a msg on twitter', tsp: 36}, 
				{name: 'Dominii', handle: 'Dominii', tweet: 'dash sucks', tsp: 50}
				],
			message: "",
			placeholderText: ""
		}
	},

	methods: {
		msgReceived(childData) {
			this.tweets.push(childData);
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
	background-color: darkslategray;
}
h4 {
	color: beige;
}
span {
	color: beige;
}
</style>
