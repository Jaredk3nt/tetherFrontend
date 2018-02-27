import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production';
const api = "http://localhost:3000/";

const state = {
    isWriting: false,
    isLoggedIn: false,
    username: "",
    token: ""
}

const getters = {
    isWriting: state => {
        return state.isWriting;
    },
    isPendingLogin: state => {
        return state.pending;
    },
    isLoggedIn: state => {
        return state.isLoggedIn;
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
        commit('LOGIN'); // show spinner
        //console.log(creds);
        return new Promise( resolve => {
            Vue.http.post( api + 'login', creds).then( response => {
                commit('LOGIN_SUCCESS');
                console.log("oh yeah, login")
                resolve(response);
            }, error => {
                //error
                console.log("on no error");
            });
        });
    },
    logout ({ commit }) {
        localStorage.removeItem("token");
        commit(LOGOUT);
    },
    createUser ({ commit }, creds) {
        commit('LOGIN'); // show spinner
        //console.log(creds);
        return new Promise( resolve => {
            Vue.http.post( api + 'users', creds).then( response => {
                commit('LOGIN_SUCCESS');
                console.log("oh yeah, login");
                resolve(response);
            }, error => {
                //error
                console.log("on no error");
            });
        });
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});