<template>
    <div>
        <h4>{{ name }}</h4>
        <span>@{{ handle }}</span>
        <span> {{ tsp }}</span> <!-- Time Since Posting = tsp -->
        <span>{{ msg }}</span>
        <img src='../assets/twit_reply.png'/><span>1</span>
        <img src="../assets/twit_retweet.png"/><span>2</span>
        <img src="../assets/twit_fave.png"/><span>3</span>
        <a :href="link">Tweet's Page</a>
    
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