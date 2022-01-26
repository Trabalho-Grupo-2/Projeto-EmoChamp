<template>
  <div>
    <Navbar />
    <img id="pagemarker3" src="../assets/activepagemarker.svg" alt="marker" />
    <img
      id="logobg"
      src="../assets/redelipse.svg"
      alt="logo back"
      style="margin-top: 60px; position: absolute"
    />
    <div class="b-col" style="height: 100px"></div>
    <div class="searchBar">
      <h3>UTILIZADORES</h3>
      <div class="input-group">
        <div class="form-outline">
          <input
            v-model="searchInput"
            type="search"
            id="form1"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div
      class="w-75 p-3 text-center"
      style="
        margin: auto;
        height: 300px;
        background-color: rgba(196, 196, 196, 0.1);
        border-radius: 20px;
      "
    >
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NOME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">TIPO</th>
            <th scope="col">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(user, index) in filterUsers">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.type }}</td>
            <td>
              <button
                @click="removeUser(user.id)"
                type="button"
                class="btn btn-outline-primary"
                style="
                  color: #374785;
                  background-color: #ffffff;
                  border-color: #374785;
                "
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="b-col" style="height: 100px"></div>
    <div class="badgetcontainer">
      <h3 id="badgeHeader">BADGES</h3>
      
    </div>
    <div
      class="w-75 p-3 text-center"
      style="
        margin: auto;
        height: 480px;
        background-color: rgba(196, 196, 196, 0.1);
        border-radius: 20px;
      "
    >
      <table class="table">
        <thead>
          <tr>
            <th scope="col">NOME</th>
            <th scope="col">SRC</th>
            <th scope="col">EDITAR</th>
            <th scope="col">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(badge, index) in getBadges">
            <th scope="row">{{ badge.name }}</th>
            <td>{{ badge.src }}</td>
            <td>
              <button
                @click="removeUser(badge.name)"
                type="button"
                class="btn btn-outline-primary"
                style="
                  color: #374785;
                  background-color: #ffffff;
                  border-color: #374785;
                "
              >
                X
              </button>
            </td>
            <td>
              <button
                @click="removeUser(badge.name)"
                type="button"
                class="btn btn-outline-primary"
                style="
                  color: #374785;
                  background-color: #ffffff;
                  border-color: #374785;
                "
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-button
        type="button"
        variant="outline-primary"
        size="lg"
        class="buttonaddbadge"
        @click="modalShow = !modalShow"
        
      >
        Adicionar Badges
      </b-button>
    <div class="modalEditarPerfil">
        <b-modal
          id="modal-center"
          centered
          title="Editar Perfil"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form @submit.stop.prevent="handleSubmit" ref="form">
            <b-form-group
              label="Nome:"
              label-for="name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input
                id="name-input"
                type="text"
                v-model="form.name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Email:"
              label-for="email-input"
              invalid-feedback="Email is required"
            >
              <b-form-input
                id="email-input"
                type="email"
                v-model="form.src"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>
    <div class="b-col" style="height: 300px"></div>
    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  components: {
    Navbar,
    FooterX,
  },
  data() {
    return {
      modal1show: false,
      searchInput: "",
      filteredUsers: [],
      form: {
        name: "",
        src: "",
        
      }
    };
  },
  computed: {
    ...mapGetters(["getUsers", "getBadges"]),
    filterUsers() {
      return this.getUsers.filter(
        (user) =>
          user.name.startsWith(this.searchInput) ||
          user.email.startsWith(this.searchInput) ||
          this.searchInput == ""
      );
    },
  },
  methods: {
    ...mapMutations(["SET_USER_LOGOUT", "REMOVE_USER"]),
    removeUser(id) {
      if (confirm("Tem a certeza que pretende remover este utilizador?")) {
        this.REMOVE_USER(id);
      }
    },
    resetModal() {
      this.form.name = "";
      this.form.src = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      this.handlemodal1();
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    handlemodal1(){
    this.modalShow = false
    }
  },
};
</script>

<style scoped>
.searchBar {
  display: flex;
  width: 35%;
  justify-content: space-between !important;
  margin: auto;
}
.searchBar button {
  height: 38px;
  width: 50px;
}
.searchBar #form1 {
  margin-left: 15px;
}
h3,
th,
td {
  color: #374785;
}
button {
  background-color: #374785;
}
#pagemarker3 {
  position: absolute;
  left: 730px;
  top: 0px;
  z-index: -1;
}
#badgeHeader {
  margin-left: 33%;
}
.buttonaddbadge {
  position: absolute;
  background-color: #ffffff;
  font-size: 12px;
  color: #374785;
  border-color: #374785;
  margin-top: -3%;
  margin-left: 41%;
}
</style>