<template>
<div class="container">
    <div class="profile-card-container">
        <div class="profile-header">
            <h1>{{user.username}}</h1>
        </div>
        <div class="profile-stats">
            <title-number title="Followers" :value="0"/>
            <title-number title="Stories" :value="user.stories.length"/>
            <title-number title="Likes" :value="likes"/>
        </div>
    </div>
    <div class="story-list">
        <story v-for="story in user.stories" v-bind:key="story._id" :story="story"/>
    </div>
</div>
</template>

<script>
import titleNumber from './atoms/titleNumber.vue';
import Story from './molecules/Story.vue';
import NavBar from './organisms/NavBar.vue';
export default {
    name:'profile',
    props: ['userId'],
    data: function() {
        return {
            user: ''
        }
    },
    mounted: function() {
        this.$http.get(this.$api + 'user/' + this.userId)
                .then( res => {
                    console.log(res.body)
                    this.user = res.body;
                })
                .catch( err => {
                    console.log(err);
                })
    },
    computed: {
        likes: function() {
            if(this.user !== undefined) {
                let likes = 0
                for(let story of this.user.stories) {
                    likes += story.likes;
                }
                return likes;
            }
            return -1;
        }
    },
    methods : {
        getUserData: function() {
            this.$http.get(this.$api + 'user/' + this.userId)
                .then( res => {
                    this.user = res.body;
                })
                .catch( err => {
                    console.log(err);
                })
        }
    },
    components: { titleNumber, Story, NavBar }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';
.container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-top: .5em;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;

        .profile-card-container {
            background-color: $white;
            width: 95%;
            margin-bottom: .5em;

            .profile-header{
                text-align: center;
            }

            .profile-stats {
                display: flex;
                flex-direction: row;

            }
        }
        .story-list {
            width: 95%;
            overflow: scroll;
        }
    }
</style>