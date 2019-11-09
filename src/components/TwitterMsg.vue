<template>
    <div>
        <v-card
    class="mx-auto"
    max-width="444"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ name }}</div>
        <v-list-item-title class="headline mb-1">@{{ handle }}</v-list-item-title>
        <div class="overline mb-4">{{ tsp }}</div>
        <v-list-item-subtitle>{{ msg }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text><v-icon>mdi-chat-outline</v-icon>Reply</v-btn>
      <v-btn text><v-icon>mdi-heart</v-icon>Like</v-btn>
      <v-btn text><v-icon>mdi-vector-square</v-icon>Retweet</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
  </v-card>

        <!-- <p>{{ name }}</p>
        <span>@{{ handle }}</span>
        <span> {{ tsp }}</span>
        <span>{{ msg }}</span>
        <img src='../assets/twit_reply.png'/><span>1</span>
        <img src="../assets/twit_retweet.png"/><span>2</span>
        <img src="../assets/twit_fave.png"/><span>3</span>
        <a :href="link">Tweet's Page</a>
        <br/>
        <a href="/">Go to Home</a> -->
        
    
    </div>
</template>

<script>
    export default {
        name: "TwitterMsg",
        props: {
            name: String,
            handle: String,
            tsp: Number,
            msg: String,
            id: Number
        },
        computed: {
            link() {
                return `/#/tweets/${this.id}`
            }
        }
    }
</script>

<style>
    img {
        width: 30px;
        height: 30px;
    }
</style>