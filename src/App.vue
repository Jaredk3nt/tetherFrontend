<template>
  <div id="app">
    <post v-if="this.$store.state.isWriting"/>
    <div class="page-body" >
      <router-view/>
    </div>
    <nav-bar/>
  </div>
</template>

<script>
import NavBar from '@/components/organisms/NavBar';
import Post from '@/components/organisms/Post';

export default {
  name: 'App',
  components: { NavBar, Post }
}
</script>

<style lang="scss">
@import './styles/styles.scss';

#app {
    font-family: $sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: grid;
    grid-template-rows: 1fr $nav-height;
    height: 100%;
    box-sizing: border-box;

    @include desktop {
        grid-template-rows: $nav-height 1fr;
    }

    .page-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-row-start: 1;
        overflow: scroll;

        @include desktop {
            grid-row-start: 2;
        }
    }
}
</style>
