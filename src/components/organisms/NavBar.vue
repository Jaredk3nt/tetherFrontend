<template>
    <div class="nav-container">
        <nav-button title="Explore"></nav-button>
        <nav-button title="Post"></nav-button>
        <nav-button title="Profile"></nav-button>
    </div>
</template>

<script>
import NavButton from '@/components/atoms/NavButton.vue';

export default {
    name:'nav-bar',
    components: { NavButton }
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