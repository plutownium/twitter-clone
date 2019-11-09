<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png">
		<TweetDeck v-on:messageFromTweetDeck="msgReceived"/>
		<TwitterMsg v-for="(tweet, index) in $tweets" :key="index" 
		:name="tweet.name" :handle="tweet.handle" :tsp="tweet.tsp" :msg="tweet.tweet" :id='tweet.id' />
		<advertisement v-on:msgFromAd="updateSomeText($event)"/>
		<input type="text" v-model="placeholderText"/> -->

		<router-view></router-view>
		<a href="/#/messages">Go to your Messages</a>
		<a href="/#/settings">Go to your Settings</a>
		
	</div>
</template>

<script>
// import TwitterMsg from './components/TwitterMsg.vue'
// import TweetDeck from './components/TweetDeck.vue'
// import Advertisement from './components/Advertisement.vue'

export default {
	name: 'app',
	components: {
		// TwitterMsg,
		// TweetDeck,
		// Advertisement
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
	background-color: rgb(38, 47, 47);
	padding: 20px;
}
h4 {
	color: beige;
}
span {
	color: beige;
}
a:visited {
	color:brown;
}
</style>
