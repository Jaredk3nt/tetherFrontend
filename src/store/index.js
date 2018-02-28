import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production';
const api = "http://localhost:3000/";

const state = {
    isWriting: false,
    isLoggedIn: false,
    userid: "",
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
    },
    userCredentials: state => {
        return { userid: state.userid, token: state.token }
    }
}

const mutations = {
    WRITE (state) {
        state.isWriting = true;
    },
    STOP_WRITE (state) {
        console.log('stop_write')
        state.isWriting = false;
    },
    POST (state) {
        state.isWriting = false;
    },
    LOGIN (state) {
        state.pending = true;
    },
    LOGIN_SUCCESS (state, creds) {
        state.isLoggedIn = true;
        state.pending = false;
        state.token = creds.token;
        state.userid = creds.userid;
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
        return new Promise( resolve => {
            Vue.http.post( api + 'login', creds).then( response => {
                console.log(response.body._id);
                commit('LOGIN_SUCCESS', {token:response.body.token, userid:response.body._id});
                resolve();
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