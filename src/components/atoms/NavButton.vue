<template>
    <div class="nav-button" @click="dispatch">
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
export default {
    name: 'nav-button',
    props: ['title'],
    methods: {
        dispatch: function() {
            this.$store.dispatch('test')
        }
    }
}
</script>

<style lang="scss">
@import '../../styles/styles.scss';
.nav-button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
        color: $font-color;
        font-size: 1.25rem;
        font-weight: 700;

        &:hover {
            color: $font-hover-color;
            cursor: pointer;
        }
    }
}

</style>