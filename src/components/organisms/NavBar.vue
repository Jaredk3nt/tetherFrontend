<template>
    <div class="nav-container">
        <nav-button title="Read"/>
        <nav-button title="Post" @clicked="startWrite"/>
        <nav-button title="Profile" v-if="isLoggedIn"/>
        <nav-button title="Login" @clicked="login" v-else/>

    </div>
</template>

<script>
import NavButton from '@/components/atoms/NavButton.vue';

export default {
    name:'nav-bar',
    components: { NavButton },
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.isLoggedIn;
        }
    },
    methods: {
        startWrite: function() {
            this.$store.commit('WRITE');
        },
        login: function() {
            this.$router.push('login');
        }
    }
}
</script>

<style lang="scss">
@import '../../styles/styles.scss';
.nav-container {
    height: $nav-height;
    width: 100%;
    background: $white;
    display: grid;
    grid-row-start: 2;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0em $mobile-margin;
    box-sizing: border-box;
    box-shadow: -1px 0px 10px rgba(0,0,0,.2);

    @include desktop {
        grid-row-start: 1;
        padding: 0em $desktop-margin;
    }
}
</style>