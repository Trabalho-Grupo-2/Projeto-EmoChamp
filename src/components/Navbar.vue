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
              <router-link
                class="link"
                to="/play"
                style="
                  margin-left: 100px;
                  text-decoration: none;
                  color: #24305e;
                "
                >JOGAR
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="link"
                to="/profile/:user_id"
                style="
                  margin-left: 100px;
                  text-decoration: none;
                  color: #24305e;
                "
                >PERFIL</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="link"
                to="/stats/:user_id"
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
        @click="$router.push('Login')"
        class="btn btn-outline-primary"
        id="btnEntrar"
        style="color: #374785;
        background-color: #ffffff; border-color: #374785; margin-top: -23px"
      >
        ENTRAR
      </button>
      &nbsp; &nbsp;&nbsp;
      <button
        type="button"
        class="btn btn-primary"
        id="btnRegistar"
        @click="$router.push('Register')"
        style="
          background-color: #374785;
          border-color: #374785;
          margin-top: -23px;
        "
      >
        REGISTAR
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
export default {};
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
