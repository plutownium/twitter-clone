<template>
    <div>
        <input type='text' v-model="yourName">
        <input type='text' v-model="yourHandle">
        <input type='text' v-model="yourTweet"/>
        <button type='button' @click="sendTweet()">Tweet</button>
    </div>
</template>

<script>
    export default {
        name: "TweetDeck",
    
    data: function() {
        return {
            yourName: "Your name here",
            yourHandle: "Your twitter handle",
            yourTweet: "What's going on?"
        }
    },

    methods: {
        sendTweet() {
            this.$emit('messageFromTweetDeck', 
                { tweet: this.yourTweet, name: this.yourName, handle: this.yourHandle }
                );
            // this.$emit('messageFromTweetDeck', this.yourTweet)
        }
    }
}

</script>