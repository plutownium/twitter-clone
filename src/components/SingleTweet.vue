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
    <p>{{ tweet2 }}</p>
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
      var doc_id = this.$route.params.id;
      var yoink = db.collection("batch_one").doc(doc_id);

      yoink.get().then(function(doc) {
        console.log(doc.data());
        return doc.data();
      });
    }
  },

  watch: {
    $route(to) {
      console.log("Back in RouteWatch");
      if (to.params.id) {
        this.getTweet();
      }
    }
  }
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