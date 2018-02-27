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
        <div v-if="hasAccount"><p @click="toggleSignOn">New here? Create an account</p></div>
        <div v-else><p @click="toggleSignOn">Already have an account? Log in here</p></div>
    </div>
</template>

<script>
export default {
    name:'login',
    data: function()  {
        return {
            hasAccount: false,
            username: "",
            password: "",
            email: "",
            password2: ""   
        }
    },
    methods: {
        toggleSignOn: function() {
            this.hasAccount = !this.hasAccount;
        },
        login: function() {
            this.$store.dispatch('login', ( {username: this.username, password: this.password} )).then( response => {
                console.log(response);
            }, error => {
                console.log(error);
            });
        },
        signup: function() {
            //Check to ensure their password is correct
            if(this.password === this.password2) {
                this.$store.dispatch('createUser', { email: this.email, username: this.username, password: this.password }).then( response => {
                    console.log(response);
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
    $login-grey:#F0F0F0;
    .login-page {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 

        .login-field {
            width: 75%;

            input {
                display: block;
                width: 100%;
                height: $login-input-height;
                padding: 1em;
                box-sizing: border-box;
                border-bottom: 1px solid $login-grey;
                border-style: solid;
                border-top: none; border-left: none; border-right: none;
            }

            button {
                width: 100%;
                height: calc(#{$login-input-height} - 1em);
                box-sizing: border-box;
                background-color: $login-grey;
                border: none;
                font-size: .85rem;
                padding: 0px;
            }
        }

        p {
            font-size: .85rem;
        }
    }
</style>