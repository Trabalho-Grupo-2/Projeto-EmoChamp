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
    users: [{ name: "Admin", email: "Admin", password: "Esmad_2122", type: "admin", id: 0 },
    { name: "User", email: "User", password: "Esmad_2122", description: "", avatar: "", categories: [{ Angry: true, total:0, correct:0 }, { Disgusted: true, total:0, correct:0 }, { Fearful: true, total:0, correct:0 }, { Happy: true, total:0, correct:0 }, { Neutral: true, total:0, correct:0 }, { Sad: true, total:0, correct:0}, { Surprised: true, total:0, correct:0 }], badges: [{name: "Angry", src: "../assets/_badges/angry.png", lvl: 0, id:0},{name: "Disgusted", src: "../assets/_badges/disgusted.png", lvl:0, id:1},{name: "Fearful", src: "../assets/_badges/fearful.png", lvl:0,id:2},{name: "Happy", src:"../assets/_badges/happy.png", lvl:0, id:3},{name:"Neutral",src:"../assets/_badges/monster (1).png", lvl:0, id:4},{name: "Sad", src:"../assets/_badges/sad.png", lvl:0, id:5},{name: "Surprised", src:"../assets/_badges/surprised.png",lvl:0, id:6}], type: "alone", id: 1 },
    { name: "User2", email: "User2", password: "Esmad_2122", description: "", avatar: "", categories: [{ Angry: true, total:0, correct:0 }, { Disgusted: true, total:0, correct:0 }, { Fearful: true, total:0, correct:0 }, { Happy: true, total:0, correct:0 }, { Neutral: true, total:0, correct:0 }, { Sad: true, total:0, correct:0}, { Surprised: true, total:0, correct:0 }], badges: [[{name: "Angry", src: "../assets/_badges/angry.png", lvl: 0, id:0},{name: "Disgusted", src: "../assets/_badges/disgusted.png", lvl:0, id:1},{name: "Fearful", src: "../assets/_badges/fearful.png", lvl:0,id:2},{name: "Happy", src:"../assets/_badges/happy.png", lvl:0, id:3},{name:"Neutral",src:"../assets/_badges/monster (1).png", lvl:0, id:4},{name: "Sad", src:"../assets/_badges/sad.png", lvl:0, id:5},{name: "Surprised", src:"../assets/_badges/surprised.png",lvl:0, id:6}]], type: "tutor", id: 2 },
    { name: "User3", email: "User3", password: "Esmad_2122", description: "", avatar: "", type: "psychologist", id: 3, patients: [] }],
    id: 3,
    selectedPatient: null,
    categories: ["Angry", "Disgusted", "Fearful", "Happy", "Neutral", "Sad", "Surprised"],
    badges: [{name: "Angry", src: "../assets/_badges/angry.png", lvl: 0, id:0},{name: "Disgusted", src: "../assets/_badges/disgusted.png", lvl:0, id:1},{name: "Fearful", src: "../assets/_badges/fearful.png", lvl:0,id:2},{name: "Happy", src:"../assets/_badges/happy.png", lvl:0, id:3},{name:"Neutral",src:"../assets/_badges/monster (1).png", lvl:0, id:4},{name: "Sad", src:"../assets/_badges/sad.png", lvl:0, id:5},{name: "Surprised", src:"../assets/_badges/surprised.png",lvl:0, id:6}]
  },
  getters: {
    getselectedUser: state => state.selectedUser,
    getLoggedState: state => state.isLogged,
    getUsers: state => state.users,
    getLoggedUser: state => state.loggedUser,
    getId: state => state.id,
    getCategories: state => state.categories,
    getBadges: state => state.badges,
    getselectedPatient: state =>  state.selectedPatient,
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
    SET_LOGGED_USER: (state, payload) =>  state.loggedUser = payload,
    INCREMENT_ID: (state) => { state.id++ },
    REMOVE_USER: (state, payload) => state.users.splice(payload, 1) ,
    ADD_BADGE: (state,payload) => state.badges.push(payload),
    REMOVE_BADGE: (state, payload) => state.badges.splice(state.badges.findIndex(badge => badge.name == payload), 1),
    EDIT_BADGE: (state,payload) => state.badges[payload.id] = payload,
    INCREMENT_TOTAL_ANSWERS: (state,payload) => state.loggedUser.categories[payload].total++,
    INCREMENT_RIGHT_ANSWERS: (state,payload) => state.loggedUser.categories[payload].correct++,
    UPDATE_USERNAME: (state,payload) => state.loggedUser.name = payload,
    UPDATE_EMAIL: (state,payload) => state.loggedUser.email = payload,
    UPDATE_PASSWORD: (state,payload) => state.loggedUser.password = payload,
    UPDATE_DESCRIPTION: (state,payload) => state.loggedUser.description = payload,
    UPDATE_AVATAR: (state,payload) => state.loggedUser.avatar = payload,
    UPDATE_BADGE: (state,payload) => state.loggedUser.badges[payload].lvl++,
    SYNC_CURRENT_USER: (state,payload) => state.users[payload] = state.loggedUser,
    ADD_PATIENT: (state,payload) => state.loggedUser.patients.push(payload),
    SET_SELECTED_PATIENT: (state,payload) => state.selectedPatient = payload
  },
});