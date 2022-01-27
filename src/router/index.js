import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Play from "../views/Play.vue";
import Consulta from "../views/Consulta.vue";
import Stats from "../views/Stats.vue";
import Profile from "../views/Profile.vue";
import Game1 from "../views/Game1.vue";
import Game2 from "../views/Game2.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import BackOffice from "../views/BackOffice.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/play",
    name: "Play",
    component: Play,
  },
  {
    path: "/profile/:user_id",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/consulta/:user_id",
    name: "Consulta",
    component: Consulta,
  },
  {
    path: "/stats/:user_id",
    name: "Stats",
    component: Stats,
  },
  {
    path: "/play/game1/:user_id",
    name: "Game1",
    component: Game1,
  },
  {
    path: "/play/game2/:user_id",
    name: "Game2",
    component: Game2,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/backoffice/:user_id",
    name: "BackOffice",
    component: BackOffice,
  }


];


const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});



export default router;
