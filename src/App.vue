<template>
    <div id="app">
        <div class="page-body">
            <keep-alive include="Home">
                <router-view/>
            </keep-alive>
        </div>
        <nav-bar/>
    </div>
</template>

<script>
import NavBar from '@/components/organisms/NavBar.vue';

export default {
    name: 'App',
    components: { NavBar },
    computed: {
    },
    mounted: function() {
        this.$store.dispatch('checkLogin');
    }
}
</script>

<style lang="scss">
@import './styles/styles.scss';

#app {
    font-family: $sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    box-sizing: border-box;

    display: grid;
    grid-template-rows: 1fr $nav-height; 
    height: 100%;
    box-sizing: border-box;

    @include desktop {
        grid-template-rows: $nav-height-desktop 1fr;
    }

    .page-body {
        grid-row-start: 1;
        overflow: scroll;
        @include desktop {
            grid-row-start: 2;
        }
    }
}
</style>
