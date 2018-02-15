<template>
<div class="post-container">
    <div class="top-bar post-bar">
        <p></p>
    </div>
    <div class="text-container">
        <textarea placeholder="Write a story!" v-model="story"></textarea>
    </div>
    <div class="bottom-bar post-bar">
        <p>{{story.length}}/500</p>
        <button class="text-button" @click="postStory">POST</button>
    </div>
</div>
</template>

<script>
export default {
    name:'post',
    data () {
        return {
            story: ""
        }
    },
    methods: {
        postStory: function() {
            this.$store.dispatch('post', this.story);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

$post-bar-height: 2.75em;

.post-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: $post-bar-height 1fr $post-bar-height;

    .text-container {
        width: 100%;
        height: 100%;
        background-color: $white;
        z-index: 999;
        padding: 1em;
        box-sizing: border-box;

        textarea {
            width: 100%;
            height: 100%;
            border: none;
            box-sizing: border-box;
            resize: none;
            font-family: $serif;
            font-size: 1rem;
        }
    }
    
    .post-bar {
        width: 100%;
        height: 100%;
        background-color: $background;
        padding: 0em 1em;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            margin: 0px;
            font-size: .85rem;
        }

        .text-button {
            font-size: 1rem;
            font-weight: 600;
            background-color: rgba(0,0,0,0);
            border: none;
        }
    }
}
</style>