<template>
    <div>
        <h4 class="name">{{ name }}</h4>
        <span class="handle">@{{ handle }}</span>
        <span> {{ tsp }}</span> <!-- Time Since Posting = tsp -->
        <span class="msg">{{ msg }}</span>
        <img src='../assets/twit_reply.png'/><span>1</span>
        <img src="../assets/twit_retweet.png"/><span>2</span>
        <img src="../assets/twit_fave.png"/><span>3</span>
        <p>{{ $route.params.id }}</p>
        <span>{{ tweet }}</span>

    </div>
</template>

<script>
    export default {
        name: "WholePgMsg",
        props: {
            name: String,
            handle: String,
            tsp: String,
            msg: String
        },
        data: function() {
            return {
                tweet: null
            }
        },

        mounted() {
            var tweet_id = this.$route.params.id;
            console.log(tweet_id)
            var myArray = this.$tweets;
            console.log(myArray)
            var arrayLength = myArray.length;

            for (var i = 0; i < arrayLength; i++) {
                if (myArray[i]["id"] == tweet_id) {
                    var found_tweet = myArray[i]["tweet"]
                }
            this.tweet = found_tweet 
            }
        },
        watch: {
            "$route" (to, from) {
                
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