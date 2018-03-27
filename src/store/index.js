import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//const debug = process.env.NODE_ENV !== 'production';
const api = "https://tetherapi.herokuapp.com/";

const state = {
    isLoggedIn: false,
    userid: "",
}

const getters = {
    isPendingLogin: state => {
        return state.pending;
    },
    isLoggedIn: state => {
        return state.isLoggedIn;
    },
    user: state => {
        return state.userid;
    }
}

const mutations = {
    POST (state) {
        state.isWriting = false;
    },
    LOGIN (state) {
        state.pending = true;
    },
    LOGIN_SUCCESS (state, creds) {
        state.isLoggedIn = true;
        state.pending = false;
        state.userid = creds.userid;
    },
    PERSISTENT_LOGIN (state) {
        state.isLoggedIn = true;
    },
    LOGOUT (state) {
        state.isLoggedIn = false;
    }
}

const actions = {
    post ({ commit, getters }, story) {
        // Send story to API
        // On completion
        return new Promise( resolve => {
            Vue.http.post( api + 'stories', { body: story }).then( response => {
                console.log("posted: " + story)
                commit('POST');
                resolve();
            }, error => {
                //error
                console.log(error);
            });
        });
        
    },
    login ({ commit }, creds) {
        commit('LOGIN'); // show spinner
        return new Promise( resolve => {
            Vue.http.post( api + 'login', creds).then( response => {
                console.log(response);
                commit('LOGIN_SUCCESS', {userid:response.body._id});
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
        console.log(creds);
        return new Promise( (resolve, creds) => {
            Vue.http.post( api + 'users', creds).then( response => {
                commit('LOGIN_SUCCESS');
                console.log("oh yeah, login");
                resolve(response);
            }, error => {
                //error
                console.log("on no error");
            });
        });
    },
    checkCookies ({ commit }) {
        var cookie = Vue.cookie.get('auth_token');
        console.log(cookie);
        if(cookie) {
            commit('PERSISTENT_LOGIN');
        }
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});