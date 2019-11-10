<template>
  <div>
    <input type="text" v-model="yourName" />
    <input type="text" v-model="yourHandle" />
    <input type="text" v-model="yourTweet" />
    <v-btn @click="addTweet()">
      <v-icon>mdi-access-point</v-icon>Tweet
    </v-btn>
  </div>
</template>

<script>
import { db } from "../db.js";

export default {
  name: "TweetDeck",

  data: function() {
    return {
      yourName: "Name goes here",
      yourHandle: "Your twitter handle",
      yourTweet: "What's going on?"
    };
  },

  methods: {
    addTweet() {
      db.collection("batch_one").add({
        name: this.yourName,
        handle: this.yourHandle,
        tsp: 0,
        message: this.yourTweet
      });
    }
    // DEPRECIATED child-to-parent comms function
    // sendTweet() {
    //     this.$emit('messageFromTweetDeck',
    //         { tweet: this.yourTweet, name: this.yourName, handle: this.yourHandle }
    //         );
    //     // this.$emit('messageFromTweetDeck', this.yourTweet)
  }
};
</script>