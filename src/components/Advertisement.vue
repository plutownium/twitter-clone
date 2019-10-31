<template>
    <div>
        <input type='text' v-model='testingKnowledge'>
        <button id='mainButton' @click='sendData()'>Click Me</button>

    </div>
</template>

<script>
    export default {
        name: "Advertisement",
    
    data: function() {
        return {
            testingKnowledge: "This is probably wrong"
        }
    },

    methods: {
        sendData() {
            this.$emit('msgFromAd', this.testingKnowledge);
        }
    }
}

</script>