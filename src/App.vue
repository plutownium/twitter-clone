<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">

		<TweetDeck @messageFromTweetDeck="tweetDeckMsgReceived"/>

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
			tweet: "",
			message: "",
			placeholderText: ""
		}
	},

	methods: {
		tweetDeckMsgReceived() {
			
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
