<template>
    <div class="login-page">
        <h1>tethered</h1>
        <div class="login-field">
            <div v-if="hasAccount">
                <input placeholder="Username" v-model="username"/>
                <input placeholder="Password" type="password" v-model="password"/>
                <button @click="login">Login</button>
            </div>
            <div v-else>
                <input placeholder="Email Address" type="email" v-model="email"/>
                <input placeholder="Username" v-model="username"/>
                <input placeholder="Password" type="password" v-model="password"/>
                <input placeholder="Re-type password" type="password" v-model="password2"/>
                <button @click="signup">Sign up now</button>
            </div>
        </div>
        <div class="link-text" v-if="hasAccount"><p @click="toggleSignOn">New here? Create an account</p></div>
        <div class="link-text" v-else><p @click="toggleSignOn">Already have an account? Log in here</p></div>
        <div class="link-text"><p @click="back">Maybe later, I just want to read.</p></div>
    </div>
</template>

<script>
import Toolbar from './atoms/Toolbar.vue';

export default {
    name:'login',
    components: {Toolbar},
    data: function()  {
        return {
            hasAccount: true,
            username: "",
            password: "",
            email: "",
            password2: ""   
        }
    },
    methods: {
        back: function() {
            this.$router.go(-1);
        },
        toggleSignOn: function() {
            this.hasAccount = !this.hasAccount;
        },
        login: function() {
            this.$store.dispatch('login', ( {username: this.username, password: this.password} )).then( response => {
                this.$router.go(-1);
            }, error => {
                console.log('got error')
                console.log(error);
            });
        },
        signup: function() {
            //Check to ensure their password is correct
            if(this.password === this.password2) {
                this.$store.dispatch('createUser', { email: this.email, username: this.username, password: this.password }).then( response => {
                    this.$router.go(-1);
                }, error => {
                    console.log(error);
                });
            } else {
                console.log("Passwords do not match");
                // Show UI element based on v-models
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/styles.scss';
    $login-input-height: 4.5em;
    $login-input-height-desktop: 3.5em;
    
    .login-page {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 

        h1 {
            @include desktop {
                font-size: 3rem;
                margin-top: 0em;
                margin-bottom: .5em;
            }
        }

        .link-text {
            p {
                margin: .5em 0em;
            }

            &:hover {
                cursor: pointer;
            }
        }

        .login-field {
            width: 75%;
            margin-bottom: .75em;

            @include desktop {
                width: 30%;
            }

            input {
                display: block;
                width: 100%;
                height: $login-input-height;
                padding: 1em;
                box-sizing: border-box;
                border-bottom: 1px solid $accent-grey;
                border-style: solid;
                border-top: none; border-left: none; border-right: none;

                @include desktop {
                    font-size: 1.2rem;
                    padding: .25em 1.5em;
                    height: $login-input-height-desktop;
                }
            }

            button {
                width: 100%;
                height: calc(#{$login-input-height} - 1em);
                box-sizing: border-box;
                background-color: $accent-grey;
                border: none;
                font-size: .85rem;
                padding: 0px;

                &:hover {
                    cursor: pointer;
                }

                @include desktop {
                    font-size: 1.25rem;
                    height: calc(#{$login-input-height-desktop} - 1em);
                }
            }
        }

        p {
            font-size: .85rem;

            @include desktop {
                font-size: 1rem;
                margin-top: 2em;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>