<template>
<div class="desktop-container">
    <div class="container" :class=" { open: parentOpen } ">
        <div class="parent" :class=" { 'parent-open': parentOpen }"><p>{{parent}}</p></div>
        <div class="top-bar" :class=" { grey: parentOpen }">
            <div class="back-button" @click="backButton" :class="{ grey: parent === undefined}" v-if="!parentOpen"><p>Back</p></div>
            <div class="parent-button" @click="toggleParent" v-if="parent !== undefined">
                <p v-if="!parentOpen">View parent story</p>
                <p v-else>Hide parent story</p>
            </div>
        </div>
        <div class="post-container">
            <div class="text-container">
                <textarea max-length="600" placeholder="Write a story!" v-model="story"></textarea>
            </div>
            <div class="bottom-bar">
                <p>{{story.length}} / 600</p>
                <button class="text-button" @click="postStory">POST</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'post',
    props: ['parent'],
    data () {
        return {
            story: "",
            parentOpen: false
        }
    },
    methods: {
        postStory: function() {
            this.$store.dispatch('post', this.story);
        },
        backButton: function() {
            //this.$store.commit('STOP_WRITE');
            this.$router.back()
        },
        toggleParent: function() {
            this.parentOpen = !this.parentOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

$post-bar-height: 3em;
$post-bar-height-desktop: 4.5em;
$top-bar-height: 2em;
$top-bar-height-desktop: 2.5em;
$min-textarea-height: 4em;
$min-textarea-height-desktop: 6em;
$back-button-width: 22%;
$back-button-width-desktop: 18%;

$d-height: 60%;
$d-width: 50%;

.desktop-container {
    @include desktop {
        position: absolute;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        padding-top: 10em;
        box-sizing: border-box;
    }
}

.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    height: 100%;
    @include desktop {
        z-index: 99;
        position: relative;
        height: $d-height;
        width: $d-width;
    }

    .parent {
        display: none;
        width: 100%;
        background: $light-grey;
        grid-column-start: 1;
        padding: .5em 1em;
        box-sizing: border-box;
        font-family: $serif;
        font-size: .85rem;
        overflow-y: scroll;

        &.parent-open {
            display: block;
        }

        @include desktop {
            padding: 1em 2em;
            font-size: 1.3rem;
        }

        p {
            margin: 0px;
        }
    }

    .top-bar {
        width: 100%;
        height: $top-bar-height;
        background-color: $white;
        box-sizing: border-box;
        display: grid;
        // position: absolute;
        z-index: 9999;
        grid-template-columns: $back-button-width 1fr $back-button-width;
        border-bottom: 2px solid $accent-grey;

        @include desktop {
            grid-template-columns: $back-button-width-desktop 1fr $back-button-width-desktop;
            height: $top-bar-height-desktop;
        }

        p {
            margin: 0px;
            font-size: .85rem;

            @include desktop {
                font-size: 1rem;
            }
        }

        .back-button {
            grid-column-start: 1;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                cursor: pointer;
            }

            @include desktop {
                grid-column-start: 3;
                // position: absolute;
                // width: 100%;
                // height: 100%;
            }
        }
        .parent-button {
            grid-column-start: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $accent-grey;
            color: #666;

            &:hover {
                cursor: pointer;
            }
        }
    }

    .grey {
        grid-template-columns: 1fr;
        background-color: $accent-grey;

        .parent-button {
            grid-column-start: 1;
        }
    }

    .post-container {
        // position: absolute;
        // top: 0;
        // left: 0;
        // right: 0;
        // width: 100%;
        height: calc(100% - #{$top-bar-height});
        display: grid;
        grid-template-rows: 1fr $post-bar-height;
        //padding-top: $top-bar-height;

        @include desktop {
            //padding-top: $top-bar-height-desktop;
            height: calc(100% - #{$top-bar-height-desktop});
            grid-template-rows: 1fr $post-bar-height-desktop;
        }

        .text-container {
            width: 100%;
            height: 100%;
            background-color: $white;
            z-index: 999;
            padding: 1em;
            box-sizing: border-box;

            textarea {
                width: 100%;
                height: 100%;
                border: none;
                box-sizing: border-box;
                resize: none;
                font-family: $serif;
                font-size: 1rem;

                @include desktop {
                    font-size: 1.2rem;
                    padding: .75em;
                }
            }
        }
        
        .bottom-bar {
            width: 100%;
            height: 100%;
            background-color: $white;
            padding: 0em 1em;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 2px solid $accent-grey;
            z-index: 999;

            p {
                margin: 0px;
                font-size: .85rem;

                @include desktop {
                    font-size: 1rem;
                }
            }

            .text-button {
                font-size: 1rem;
                font-weight: 600;
                background-color: $background;
                border: none;
                border-radius: 10px;
                color: $font-color;
                padding: .5em 2.5em;

                &:hover {
                    cursor: pointer;
                }

                @include desktop {
                    padding: .75em 2.5em;
                }
            }
        }
    }
}

.open {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr $top-bar-height calc(#{$min-textarea-height} + #{$post-bar-height});
    box-sizing: border-box;
    background-color: $white;
    z-index: 9999;
    position: absolute;

    @include desktop {
        grid-template-rows: 1fr $top-bar-height-desktop calc(#{$min-textarea-height-desktop} + #{$post-bar-height-desktop});
        width: $d-width;
        height: $d-height;
        position: static;
    }

    .parent {
        grid-row-start: 1;
    }
    .top-bar {
        position: static;
        grid-row-start: 2;
    }
    .post-container {
        position:static;
        height: 100%;
        grid-row-start: 3;
        padding-top: 0px;

        .text-container {
            height: 100%;
            padding: .75em 1em;
        }
    }
}
</style>