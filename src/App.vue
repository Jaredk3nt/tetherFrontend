<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import Post from '@/components/organisms/Post';

export default {
    name: 'App',
    components: { Post },
    computed: {
        postOpen: function() {
            return this.$store.getters.isWriting;
        },
        loggingIn: function() {
            return this.$store.getters.isLoggingIn;
        }
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
}
</style>
