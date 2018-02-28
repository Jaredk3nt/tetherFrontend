<template>
<div :class=" { open: parentOpen } ">
    <div class="parent" :class=" { 'parent-open': parentOpen }"><p>LoremIpsum</p></div>
    <div class="top-bar" :class=" { grey: parentOpen }">
        <div class="back-button" @click="backButton" v-if="!parentOpen"><p>Back</p></div>
        <div class="parent-button" @click="toggleParent">
            <p v-if="!parentOpen">View parent story</p>
            <p v-else>Hide parent story</p>
        </div>
    </div>
    <div class="post-container">
        <div class="text-container">
            <textarea max-length="600" placeholder="Write a story!" v-model="story"></textarea>
        </div>
        <div class="bottom-bar">
            <p>{{story.length}} / 600</p>
            <button class="text-button" @click="postStory">POST</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'post',
    data () {
        return {
            story: "",
            parentOpen: false
        }
    },
    methods: {
        postStory: function() {
            this.$store.dispatch('post', this.story);
        },
        backButton: function() {
            console.log("hey")
            this.$store.commit('STOP_WRITE');
        },
        toggleParent: function() {
            this.parentOpen = !this.parentOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

$post-bar-height: 3em;
$top-bar-height: 2em;
$min-textarea-height:4em;

.open {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-rows: 1fr $top-bar-height calc(#{$min-textarea-height} + #{$post-bar-height});
    box-sizing: border-box;
    background-color: $white;

    .parent {
        grid-row-start: 1;
    }
    .top-bar {
        position: static;
        grid-row-start: 2;
    }
    .post-container {
        position:static;
        height: calc(#{$post-bar-height} * 2);
        grid-row-start: 3;
        padding-top: 0px;

        .text-container {
            height: $min-textarea-height;
            padding: .75em 1em;
        }
    }
}

.parent {
    display: none;
    width: 100%;
    background: $white;
    grid-column-start: 1;
    padding: .5em 1em;
    box-sizing: border-box;

    &.parent-open {
        display: block;
    }
}

.top-bar {
    width: 100%;
    height: $top-bar-height;
    background-color: $white;
    box-sizing: border-box;
    display: grid;
    position: absolute;
    z-index: 9999;
    grid-template-columns: 22% 1fr 22%;
    border-bottom: 2px solid $accent-grey;

    &.grey {
        grid-template-columns: 1fr;
        background-color: $accent-grey;

        .parent-button {
            grid-column-start: 1;
        }
    }

    p {
        margin: 0px;
        font-size: .85rem;
    }

    .back-button {
        grid-column-start: 1;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            cursor: pointer;
        }
    }
    .parent-button {
        grid-column-start: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $accent-grey;
        color: #666;
    }
}

.post-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: calc(100% - #{$top-bar-height});
    display: grid;
    grid-template-rows: 1fr $post-bar-height;
    padding-top: $top-bar-height;

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
    
    .bottom-bar {
        width: 100%;
        height: 100%;
        background-color: $white;
        padding: 0em 1em;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 2px solid $accent-grey;

        p {
            margin: 0px;
            font-size: .85rem;
        }

        .text-button {
            font-size: 1rem;
            font-weight: 600;
            background-color: $background;
            border: none;
            border-radius: 10px;
            color: $font-color;
            padding: .5em 2.5em;
        }
    }
}
</style>