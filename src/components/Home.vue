<template>
<div class="page-body">
    <router-view/>
    <div class="homepage">
        <div class="story-list">
            <story v-for="story in stories" v-bind:key="story._id" :story="story"/>
        </div>
    </div>
    <nav-bar/>
</div>
</template>

<script>
import Story from '@/components/molecules/Story.vue';
import NavBar from '@/components/organisms/NavBar.vue';
const api = "https://tetherapi.herokuapp.com/";

export default {
    name: 'Home',
    data () {
        return {
            stories: []
        }
    },
    methods: {
        fetchStories: function() {
            this.$http.get( api + 'stories')
                .then( response => {
                    console.log(response.body)
                    this.stories = response.body;
                }, error => {
                    //error
                    console.log("on no error");
                });
        }
    },
    mounted() {
        this.fetchStories();
    },
    components: {Story, NavBar}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/styles.scss';
.page-body {
    display: grid;
    grid-template-rows: 1fr $nav-height; 
    height: 100%;
    box-sizing: border-box;

    @include desktop {
        grid-template-rows: $nav-height-desktop 1fr;
    }

    .homepage {
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-row-start: 1;
        overflow: scroll;
        width: 100%;

        @include desktop {
            grid-row-start: 2;
        }

        .story-list {
            box-sizing: border-box;
            width: $mobile-card-width;

            @include desktop {
                width: $desktop-card-width;
            }
            
        }
    }
}

</style>
