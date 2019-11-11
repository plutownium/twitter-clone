<template>
  <div>
    <v-card class="mx-auto" max-width="444" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ name }}</div>
          <v-list-item-title class="headline mb-1">@{{ handle }}</v-list-item-title>
          <div class="overline mb-4">{{ tsp }}</div>
          <v-list-item-subtitle>{{ msg }}{{ message }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text>
          <v-icon>mdi-chat-outline</v-icon>Reply
        </v-btn>
        <v-btn text>
          <v-icon>mdi-heart</v-icon>Like
        </v-btn>
        <v-btn text>
          <v-icon>mdi-vector-square</v-icon>Retweet
        </v-btn>
        <v-btn text>
          <router-link v-if="id" :to="{ name: 'SingleTweet', params: { id: id }}">Bigger</router-link>
        </v-btn>
      </v-card-actions>
      <p>{{ id }}</p>
    </v-card>
  </div>
</template>

<script>
// import { db } from "../db.js";

export default {
  name: "TwitterMsg",

  props: {
    name: String,
    handle: String,
    tsp: Number,
    msg: String,
    message: String,
    id: [String, Number]
  },

  computed: {
    link() {
      return `/#/tweets/${this.id}`;
    }
  }

  // firestore: {
  //   tweet: db.collection("batch_one")
  // }
};
</script>

<style>
img {
  width: 30px;
  height: 30px;
}
</style>