import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
        storage: window.localStorage,
    })],
  state: {
    selectedUser: null,
    isLogged: false,
    loggedUser: null,
    users: [{ name: "Admin", email: "Admin", password: "Esmad_2122", type: "admin" , id:0 },
    { name: "User", email: "User", password: "Esmad_2122", type: "alone" , id:1 },
    { name: "User2", email: "User2", password: "Esmad_2122", type: "tutor" , id:2 },
    { name: "User3", email: "User3", password: "Esmad_2122", type: "psychologist" , id:3 }],
    id: 3,
    
  },
  getters: {
    getselectedUser: state => state.selectedUser,
    getLoggedState: state => state.isLogged,
    getUsers: state => state.users,
    getLoggedUser: state => state.loggedUser,
    getId: state => state.id,

  },
  mutations: {
    SET_SELECTED_USER: (state, payload) => { state.selectedUser = payload },
    SET_USER: (state, payload) => {
      state.users.push(payload);
    },
    SET_USER_LOGIN: (state, payload) => {
      state.isLogged = payload;
    },
    SET_USER_LOGOUT: (state, payload) => { state.isLogged = payload; state.loggedUser = null },
    SET_LOGGED_USER: (state, payload) => { state.loggedUser = payload; },
    INCREMENT_ID: (state) => {state.id++},
    REMOVE_USER: (state,payload) => { state.users.splice(payload,1)}
  },
});