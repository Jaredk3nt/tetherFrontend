<template>
    <div class="homepage">
        <div class="story-list">
            <story v-for="story in stories" v-bind:key="story.story" :author="story.author" :story="story.story"/>
        </div>
    </div>
</template>

<script>
import Story from '@/components/molecules/Story.vue';

export default {
  name: 'Home',
  data () {
    return {
      stories: [ { author: "jared jones", story: "Lorem ipsum this is some random text that is a story." },
                { author: "jared jones", story: "Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story." }, { author: "jared jones", story: "Lorem ipsum this is some random text that is a story. Lorem ipsum this is sm text that is a story. Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story." },
                { author: "jared jones", story: "Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story. Lorem ipsum this is some random text that is a story. Lorem " }]
    }
  },
  components: {Story}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/styles.scss';
.homepage {
    overflow: scroll;

    .story-list {
        margin: 0em $mobile-margin;
        box-sizing: border-box;

        @include desktop {
            margin: 0em $desktop-margin;
        }
    }
}
</style>
