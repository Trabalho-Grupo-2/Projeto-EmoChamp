<template>
  <div>
    <Navbar />
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
          <input v-model="searchInput" type="search" id="form1" class="form-control" />
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
            <th scope="row">{{user.id}}</th>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.type}}</td>
            <td><button
          @click="removeUser(user.id)"
        type="button"
        class="btn btn-outline-primary"
        style="color: #374785;
        background-color: #ffffff; border-color: #374785;"
      >
      X
      </button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="b-col" style="height: 100px"></div>
    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  components: {
    Navbar,
    FooterX,
  },
  data() {
    return {
      searchInput: "",
      filteredUsers: [],
    }
  },
  computed: {
    ...mapGetters([
      'getUsers',
    ]),
    filterUsers() {
      return this.getUsers.filter((user) => user.name.startsWith(this.searchInput) || user.email.startsWith(this.searchInput) || this.searchInput == "")
    }
  },
  methods: {
    ...mapMutations([
      'SET_USER_LOGOUT','REMOVE_USER'
    ]),
    removeUser(id) {
      if(confirm("Tens a certeza que pretendes remover este utilizador?")){
        this.REMOVE_USER(id);
      }
    }
  },
};
</script>

<style scoped>
.searchBar {
  display: flex;
  width:35%;
  justify-content: space-between !important;
  margin:auto;
}
.searchBar button{
  height:38px;
  width: 50px;
}
.searchBar #form1{
  margin-left: 15px;
}
h3, th, td {
  color: #374785;
}
button { 
  background-color: #374785;
}
</style>