<template>
    <div class="nav-container">
        <div class="nav-title">tethered</div>
        <div class="nav-actions">
            <nav-button title="Read"/>
            <nav-button title="Write" @clicked="startWrite"/>
            <nav-button title="Profile" v-if="isLoggedIn"/>
            <nav-button title="Login" @clicked="login" v-else/>
        </div>
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
    display: flex;
    grid-row-start: 2;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0em $mobile-margin;
    box-sizing: border-box;
    box-shadow: -1px 0px 10px rgba(0,0,0,.2);
    align-items: center;

    @include desktop {
        height: $nav-height-desktop;
        grid-row-start: 1;
        padding: 0em $desktop-margin;
        justify-content: space-between;
        box-shadow: none;
        border-bottom: 1px solid $accent-grey;
        padding-left: calc(#{$desktop-margin} + 2em); 
    }

    .nav-title {
        display: none;
        font-size: 2.2rem;
        font-weight: 600;
        color: $accent-green;

        &:hover {
            cursor: pointer;
        }

        @include desktop {
            display: block;
        }
    }

    .nav-actions {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;

        @include desktop {
            width: 40%;
        }
    }
}
</style>