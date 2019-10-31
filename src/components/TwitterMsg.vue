<template>
    <div>
        <h4>{{ name }}</h4>
        <h4>@{{ handle }}</h4>
        <p> {{ tsp }}</p> <!-- Time Since Posting = tsp -->
        <p>{{ msg }}</p>
        <img src='../assets/twit_reply.png'/><p>1</p>
        <img src="../assets/twit_retweet.png"/><p>2</p>
        <img src="../assets/twit_fave.png"/><p>3</p>
    
    </div>
</template>

<script>
    export default {
        name: "TwitterMsg",
        props: {
            name: String,
            handle: String,
            tsp: String,
            msg: String
        }
    }
</script>

<style>
    img {
        width: 30px;
        height: 30px;
    }
</style>