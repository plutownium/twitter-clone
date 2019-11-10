<template>
  <div>
    <twittermsg
      v-if="tweet"
      :id="tweet.id"
      :name="tweet.name"
      :handle="tweet.handle"
      :tsp="tweet.tsp"
      :msg="tweet.tweet"
    ></twittermsg>
  </div>
</template>

<script>
import TwitterMsg from "./TwitterMsg.vue";
import { db } from "../db.js";

export default {
  name: "SingleTweet",
  components: {
    twittermsg: TwitterMsg
  },

  data: function() {
    return {
      tweet: null,
      tweet2: this.getTweet()
    };
  },

  firestore: {
    tweet: db.collection("batch_one")
  },

  methods: {
    getTweet() {
      // method tests whether I can retrieve a doc named...
      // var doc_id = "4nfzJg2jmVJlt5YrscUQ";
      var doc_id2 = "GzKM29EaacuOHWDaj6gV";
      var yoink = db.collection("batch_one").doc(doc_id2);

      yoink
        .get()
        .then(function(doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
          } else {
            console.log("Your method returned no such doc");
          }
        })
        .catch(function(error) {
          console.log("Something's messed: ", error);
        });
    }
  }

  // methods: {
  //     changeTweet(tweet_id) {
  //         // var tweet_id = parseInt(this.$route.params.id);
  //         // console.log(tweet_id)
  //         var myArray = this.$tweets;
  //         // console.log(myArray)
  //         var arrayLength = myArray.length;

  //         for (var i = 0; i < arrayLength; i++) { // selects the right tweet

  //             // console.log("Tweet Id is: ", tweet_id)
  //             // console.log("here is my array: ", myArray[i]['id'])
  //             if (myArray[i]["id"] == tweet_id) {
  //                 console.log("hey: ", myArray[i])
  //                 var found_tweet = myArray[i]
  //             }
  //             console.log("Found Tweet: ", found_tweet)
  //         this.tweet = found_tweet // stores the right tweet as this.tweet
  //         }
  //     }
  // },

  // mounted() {
  //     this.changeTweet(parseInt(this.$route.params.id))
  // },

  // watch: {
  //     "$route" (to) {
  //         console.log("In Routewatch")
  //         if (to.params.id) {
  //             this.changeTweet(parseInt(this.$route.params.id))

  //         }
  //     }
  // }
};
</script>

<style>
img {
  width: 30px;
  height: 30px;
}

.handle {
  font: Times New Roman;
  font-size: 16px;
  color: OldLace;
}

.name {
  font: Helvetica Neue;
  font-size: 16px;
  color: OldLace;
}

.msg {
  font: Helvetica Neue;
  font-size: 14px;
  color: Aliceblue;
}

p {
  color: aliceblue;
  font-weight: bold;
}
</style>