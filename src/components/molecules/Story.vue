<template>
    <div class="story-container">
        <div class="author">{{author}}</div>
        <p>{{story}}</p>
        <div class="story-actions">
            <div class="action">></div>
            <div class="action">*</div>
            <div class="action">+</div>
        </div>
        <!-- <story-bar/> -->
    </div>
</template>

<script>

export default {
    name:'story',
    props: [ 'author', 'story' ],
    components: {}
}
</script>

<style lang="scss" scoped> 
@import '../../styles/styles.scss';
.story-container {
    background: $white;
    padding: 1em 1.5em 0em;
    width: 100%;
    box-sizing: border-box;
    margin: 1em 0em;

    .author {
        font-size: .85rem;
        color: $light-font;
    }

    p {
        font-size: $story-text-size;
        color: $story-text-color;
        font-family: $serif;
        font-weight: 500;
        margin: .4em 0em;
    }

    .story-actions {
        height: 2em;
        margin-top: .5em;
        display: grid;
        grid-template-columns: 4fr 1fr 1fr;

        .action {
        }
    }
}

</style>