<template>
    <div>
        <TweetDeck></TweetDeck>

        <TwitterMsg v-for="(tweet, index) in $tweets" :key="index" 
		:name="tweet.name" :handle="tweet.handle" :tsp="tweet.tsp" :msg="tweet.tweet" :id='tweet.id' />

        <advertisement v-on:msgFromAd="updateSomeText($event)"/>

		<input type="text" v-model="placeholderText"/>
    </div>
</template>

<script>
import TwitterMsg from './TwitterMsg.vue'
import TweetDeck from './TweetDeck.vue'
import Advertisement from './Advertisement.vue'

    export default {
        name: 'homepage',
        components: {
            TwitterMsg,
            TweetDeck,
            Advertisement
        },

	data: function() {
		return {
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