<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-link navbar-light">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="#"
          ><img
            id="logobg"
            src="../assets/logoshape.svg"
            alt="logo back"
            style="margin-top: -12.8px; margin-left: -11.8px" /><img
            class="logo"
            src="../assets/logo1.png"
            style="
              width: 160px;
              height: 35.01px;
              margin-top: -22px;
              margin-left: -220px;
            "
            alt="emochamp logo"
        /></a>
        <!-- Collapsible wrapper -->
        <div
          class="navbar-collapse"
          id="navbarSupportedContent"
          style="margin-left: 100px; margin-top: -22px"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- Link -->
            <li class="nav-item">
              <router-link
                class="link"
                to="/"
                style="margin-left: 80px; text-decoration: none; color: #24305e"
                >HOME</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{name:'Play', params: {user_id: getLoggedUser.id}}"
                class="link"
                style="
                  margin-left: 100px;
                  text-decoration: none;
                  color: #24305e;
                "
                >JOGAR
              </router-link>
            </li>
            <li v-show="getLoggedState" class="nav-item">
              <router-link :to="{ name: 'Profile', params: {user_id: getLoggedUser.id} }"
                class="link"
                style="
                  margin-left: 100px;
                  text-decoration: none;
                  color: #24305e;
                "
                >PERFIL</router-link
              >
            </li>
            <li v-show="getLoggedState" class="nav-item">
              <router-link :to="{ name: 'BackOffice', params: {user_id: getLoggedUser.id} }"
                class="link"
                style="
                  margin-left: 100px;
                  text-decoration: none;
                  color: #24305e;
                "
                >ADMIN</router-link
              >
            </li>
            <li v-show="getLoggedState" class="nav-item">
              <router-link :to="{ name: 'Stats', params: {user_id: getLoggedUser.id} }"
                class="link"
                style="
                  margin-left: 100px;
                  text-decoration: none;
                  color: #24305e;
                "
                >ESTATÍSTICAS</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <button
        type="button"
        @click="getLoggedState ? $router.push({name: 'Profile' , params: {user_id: getLoggedUser.id}}) : $router.push('Login')"
        class="btn btn-outline-primary"
        id="btnEntrar"
        style="color: #374785;
        background-color: #ffffff; border-color: #374785; margin-top: -23px"
      >
        {{getLoggedState ? getLoggedUser.name : "ENTRAR"}}
      </button>
      &nbsp; &nbsp;&nbsp;
      <button
        type="button"
        class="btn btn-primary"
        id="btnRegistar"
        @click="getLoggedState ? logout() :$router.push('Register')"
        style="
          background-color: #374785;
          border-color: #374785;
          margin-top: -23px;
        "
      >
        {{getLoggedState ? "LOGOUT" : "REGISTAR"}}
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';


export default {
  data() {
    return {
      logged: false,
    }
  },
  computed: {
    ...mapGetters([
      'getLoggedUser','getLoggedState',
    ])
  },
  methods: {
    ...mapMutations([
      'SET_USER_LOGOUT',
    ]),
    logout() {
      this.SET_USER_LOGOUT(this.logged);
      this.$router.push("/");
    }
  },
};

</script>

<style>
#btnRegistar:hover {
  background-color: white !important;
  color: #374785 !important;
}
#btnEntrar:hover {
  background-color: #374785 !important;
  color: white !important;
}
li:hover {
  transform: scale(1.1) !important;
}
</style>
