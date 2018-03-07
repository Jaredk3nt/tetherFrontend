<template>
<div class="page-body">
    <div class="homepage">
        <div class="story-list">
            <story v-for="story in stories" v-bind:key="story.body" :story="story"/>
        </div>
    </div>
    <nav-bar/>
</div>
</template>

<script>
import Story from '@/components/molecules/Story.vue';
import NavBar from '@/components/organisms/NavBar.vue';

export default {
  name: 'Home',
  data () {
    return {
      stories: [ { author: "jared jones", body: "Lorem ipsum this is some random text that is a story." },
                { author: "jared jones", body: "Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story." }]
    }
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

        @include desktop {
            grid-row-start: 2;
        }

        .story-list {
            margin: 0em $mobile-margin;
            box-sizing: border-box;

            @include desktop {
                margin: 0em $desktop-margin;
            }
        }
    }
}

</style>
