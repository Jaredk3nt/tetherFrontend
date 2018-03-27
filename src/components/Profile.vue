<template>
    <div class="container">
        <div class="profile-card-container">
            <div class="profile-header">
                <div class="profile-img"><img/></div>
            </div>
            <div class="profile-stats">
                <title-number title="Followers" :value="numFollowers"/>
                <title-number title="Stories" :value="numStories"/>
                <title-number title="Likes" :value="numLikes"/>
            </div>
        </div>
        <div class="story-list">
            <story v-for="story in stories" v-bind:key="story.body" :story="story"/>
        </div>
    </div>
</template>

<script>
import titleNumber from './atoms/titleNumber.vue';

export default {
    name:'profile',
    computed: {
        numFollowers: function() {
            return 1;
        },
        numStories: function() {
            return 1;
        },
        numLikes: function() {
            return 1;
        }
    },
    methods : {
        getUserData: function() {

        }
    },
    components: { titleNumber }
}
</script>

<style lang="scss">

</style>