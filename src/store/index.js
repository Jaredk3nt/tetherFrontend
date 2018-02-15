import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production';

const state = {
    isWriting: false,
    isLoggedIn: false,
    username: "",
    token: ""
}

const getters = {
    isWriting: state => {
        return state.isWriting;
    }
}

const mutations = {
    WRITE (state) {
        state.isWriting = true;
    },
    POST (state) {
        state.isWriting = false;
    },
    LOGIN (state) {
        state.pending = true;
    },
    LOGIN_SUCCESS (state) {
        state.isLoggedIn = true;
        state.pending = false;
    },
    LOGOUT (state) {
        state.isLoggedIn = false;
    }
}

const actions = {
    post ({ commit }, story) {
        // Send story to API
        // On completion
        console.log(story);
        commit('POST');
    },
    login ({ commit }, creds) {
        commit(LOGIN); // show spinner
        return new Promise((resolve) => {
            this.$http.get('http://localhost:3000/login').then((response) => {
                commit(LOGIN_SUCCESS);
                resolve();
            });
        });
    },
    logout ({ commit }) {
        localStorage.removeItem("token");
        commit(LOGOUT);
    },
    test ({ commit }) {
        console.log('test');
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});