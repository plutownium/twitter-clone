<template>
    <div>

        <twittermsg v-if="tweet" :id="tweet.id" :name="tweet.name" :handle="tweet.handle" :tsp="tweet.tsp" :msg="tweet.tweet"></twittermsg>
        <!-- <p>{{ $route.params.id }}</p>
        <span>{{ tweet }}</span> -->

    </div>
</template>

<script>
import TwitterMsg from './TwitterMsg.vue'
    export default {
        name: "WholePgMsg",
        components: {
            'twittermsg': TwitterMsg
        },

        data: function() {
            return {
                tweet: null
            }
        },

        methods: {
            changeTweet(tweet_id) {
                // var tweet_id = parseInt(this.$route.params.id);
                // console.log(tweet_id)
                var myArray = this.$tweets;
                // console.log(myArray)
                var arrayLength = myArray.length;

                for (var i = 0; i < arrayLength; i++) { // selects the right tweet

                    // console.log("Tweet Id is: ", tweet_id)
                    // console.log("here is my array: ", myArray[i]['id'])
                    if (myArray[i]["id"] == tweet_id) {
                        console.log("hey: ", myArray[i])
                        var found_tweet = myArray[i]
                    } 
                    console.log("Found Tweet: ", found_tweet)
                this.tweet = found_tweet // stores the right tweet as this.tweet
                }
            }
        },

        mounted() {
            this.changeTweet(parseInt(this.$route.params.id))
        },

        watch: {
            "$route" (to) {
                console.log("In Routewatch")
                if (to.params.id) {
                    this.changeTweet(parseInt(this.$route.params.id))
                    
                }
            }
        }
    }
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