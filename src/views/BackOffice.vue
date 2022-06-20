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
      style="margin: auto; height: 300px; border-radius: 20px"
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
      <b-button
        v-b-modal.modal-center="'modal'"
        @click="modalShow = !modalShow"
        type="button"
        variant="outline-primary"
        size="lg"
        class="buttonaddbadge"
      >
        Adicionar Badges
      </b-button>
    </div>
    <div
      class="w-75 p-3 text-center"
      style="margin: auto; height: 480px; border-radius: 20px"
    >
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">NOME</th>
            <th scope="col">SRC</th>
            <th scope="col">EDITAR</th>
            <th scope="col">ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(badge, index) in getBadges">
            <th>{{ index }}</th>
            <th scope="row">{{ badge.name }}</th>
            <td>{{ badge.src }}</td>
            <td>
              <button
                v-b-modal.modal-center="'modal2'"
                @click="editBadge(badge.name)"
                type="button"
                class="btn btn-outline-primary"
                style="
                  color: #374785;
                  background-color: #ffffff;
                  border-color: #374785;
                "
              >
                O
              </button>
            </td>
            <td>
              <button
                @click="removeBadge(badge.name)"
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
    <div class="modalAddBadge">
      <b-modal
        id="modal2"
        centered
        title="Editar Badge"
        @ok="handleOk2"
      >
        <form @submit.stop.prevent="handleSubmit2" ref="form">
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
            label="Src:"
            label-for="src-input"
            invalid-feedback="Src is required"
          >
            <b-form-input
              id="src-input"
              type="text"
              v-model="form.src"
              required
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
    <div class="modalAddBadge">
      <b-modal
        id="modal"
        centered
        title="Adicionar Badge"
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
            label="src:"
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
    <form @submit.prevent="addPhoto()" id="imgUpload" style="margin-top: 50px">
      <h3 id="badgeHeader">ADICIONAR IMAGEM PARA EMOÇÃO</h3>
  <div class="mb-3">
  <label for="formFile" class="form-label">Escolher Ficheiro de Imagem</label>
  <input class="form-control" type="file" id="formFile" accept="image/*">
</div>
<div>
  <label for="catSelect" class="form-label">Selecione a Categoria:</label>
  <br>
    <b-form-select id="catSelect" v-model="selectedCat" :options="getCategories"></b-form-select>
    <div class="mt-3">Selecionado: <strong>{{ selectedCat }}</strong></div>
  </div>
  <br>
  <div class="mb-3 form-check">
    <input type="checkbox" v-model="checkboxChecked" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Tenho a certeza que escolhi a categoria correta.</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
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
      checkboxChecked: false,
      selectedCat: "",
      mybadge: "",
      modalShow: false,
      modal2Show: false,
      searchInput: "",
      filteredUsers: [],
      form: {
        name: "",
        src: "",
        id: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getUsers", "getBadges","getCategories"]),
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
    ...mapMutations([
      "SET_USER_LOGOUT",
      "REMOVE_USER",
      "REMOVE_BADGE",
      "ADD_BADGE",
      "EDIT_BADGE",
    ]),
    removeUser(id) {
      if (confirm("Tem a certeza que pretende remover este utilizador?")) {
        this.REMOVE_USER(id);
      }
    },
    addBadge() {
      this.form.lvl = 0;
      this.ADD_BADGE(this.form);
      this.modalShow = false;
    },
    editBadge(name) {
      this.myBadge = this.getBadges.filter( badge => badge.name == name);
      this.form.name = this.myBadge[0].name;
      this.form.src = this.myBadge[0].src;
      this.form.id = this.myBadge[0].id;
      this.modal2Show = true;
    },
    submitEdit(){
      let myObj = {
        name: this.form.name,
        src: this.form.src,
        id: this.form.id,

      }
      this.modal2Show = false;
      this.EDIT_BADGE(myObj);
      console.log(myObj);
    },
    removeBadge(index) {
      if (confirm("Tem a certeza que pretende remover este Badge?"))
        this.REMOVE_BADGE(index);
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
      this.addBadge();
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    handleOk2(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit2();
    },
    handleSubmit2() {
      this.submitEdit();
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    addPhoto() {
      console.log(this.selectedCat);
      console.log(this.checkboxChecked);
      if (this.selectedCat!= "" && this.checkboxChecked != false ){
        console.log("sucess");
      }
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
.table {
  background-color: rgba(196, 196, 196, 0.1);
  border-radius: 15px;
  margin-bottom: 300 !important;
}

</style>