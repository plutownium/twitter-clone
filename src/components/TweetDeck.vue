<template>
    <div>
        <img src=""/> <!-- wanna dynamically render a profile pic -->
        <!-- <input type='text' v-model="yourName">
        <input type='text' v-model="yourHandle">-->
        <input type='text' v-model="yourTweet"/>
        <button type='button' @click="sendTweet()">Tweet</button>
    </div>
</template>

<script>
    export default {
        name: "TweetDeck",
    
    data: function() {
        return {
            yourName: "rolypolyistaken",
            yourHandle: "rolypolyistaken",
            yourTweet: "What's going on?",
            // message: this.yourTweet
        }
    },

    methods: {
        sendTweet() {
            // this.$emit('messageFromTweetDeck', this.yourTweet, this.yourName, this.yourHandle);
            this.$emit('messageFromTweetDeck', this.yourTweet)
        }
    }
}

</script>