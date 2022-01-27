<template>
  <div>
    <Navbar />

    <div class="consultaImg">
      <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
      <img
        id="redBaloonTop"
        src="../assets/redelipse.svg"
        alt="Red Baloon"
        style="margin-top: 60px"
      />
    </div>

    <div class="consulta">
      <b-container class="consultaContainer">
        <b-row class="consultaAddPaciente" align-v="center" align-h="start">
          <b-col class="consultaAddCol" cols="12">
            <p>Adicionar Paciente :</p>
          </b-col>
          <b-col cols="5">
            <input type="text" v-model="patientName" class="consultaAddInput" />
          </b-col>
          <b-col>
            <b-button
              type="button"
              variant="outline-primary"
              size="lg"
              class="buttonPlay"
              @click="addPatient()"
            >
              Adicionar
            </b-button>
          </b-col>
        </b-row>

        <div class="consultaSearch">
          <b-row class="consultaSearchPaciente">
            <b-col cols="3">
              <span>Procurar Paciente: </span>
            </b-col>
            <!-- <b-col>
              <input v-model= "searchinput" type="text" class="consultaSearchInput" />
            </b-col> -->
          </b-row>
            <div v-for="(user, index) in getLoggedUser.patients" :key="index">
                <br>
                <p @click="setUser($event)">{{user.name}}</p>
            </div>
          <!-- <b-row class="consultaIconGroup" align-v="center" align-h="center">
            <b-col sm align-self="center">
              <img src="../assets/seta-left.svg" class="nextFoto" />
            </b-col>
            <b-col sm>
              <img class="gameFoto" src="../assets/Badges/Group179.svg" />
            </b-col>
            <b-col sm>
              <img class="gameFoto" src="../assets/Badges/Group207.svg" />
            </b-col>
            <b-col sm>
              <img class="gameFoto" src="../assets/Badges/Group190.svg" />
            </b-col>
            <b-col sm>
              <img class="gameFoto" src="../assets/Badges/Group198.svg" />
            </b-col>
            <b-col sm align-self="center">
              <img src="../assets/seta-right.svg" class="nextFoto" />
            </b-col>
          </b-row> -->
        </div>
      </b-container>
    </div>
    <div v-if="getselectedPatient != null">
        <StatsY />
    </div>

    <div class="consultaImg">
      <img id="bluebg" src="../assets/ondasmakerBaixo.svg" alt="marker" />
    </div>

    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";
import StatsY from "../components/StatsY.vue";
import { mapGetters, mapMutations } from "vuex";

/*  import StatsX from "../components/StatsX.vue"; */

export default {
  data() {
    return {
      searchinput: "",
      patientName: "",
      mypatient: "",
    };
  },
  components: {
    Navbar,
    FooterX,
    StatsY
  },
  computed: {
    ...mapGetters(["getUsers","getLoggedUser","getselectedPatient"]),
  },
  methods: {
      ...mapMutations([
            'ADD_PATIENT','SET_SELECTED_PATIENT','SYNC_CURRENT_USER', //also supports payload `this.nameOfMutation(amount)` 
        ]),
      addPatient() {
          if(!this.getLoggedUser.patients.some(patient => {patient.name == this.patientName || patient.email == this.patientName })){
              this.my_patient = this.getUsers.find(user => {user.name == this.patientName || user.email == this.patientName });
              if(this.my_patient.type!= "psychologist"){
              delete this.my_patient.password;
              this.ADD_PATIENT(this.my_patient);
              this.SYNC_CURRENT_USER(this.getLoggedUser.id);
              }
          }
      },
      setUser(event) {
          let myusername = event.target.innerHTML;
          let myuser = this.getUsers.find(user => user.name == myusername);
          this.SET_SELECTED_PATIENT(myuser);
      }
  },
};
</script>

<style>
.consultaImg #pagemarker {
  position: absolute;
  left: 889px;
  top: 0px;
  z-index: -1;
}

.consultaImg #redBaloonTop {
  margin-top: 60px;
  top: 200px;
  position: absolute;
}

.consultaImg #bluebg {
  position: absolute;
  width: 100%;
  height: auto;
  top: 1400px;
  z-index: -2;
}

.consulta {
  color: #24305e;
}

.consulta .consultaContainer {
  margin: 50px 50px 100px 50px;
}

.consulta .consultaContainer .consultaAddPaciente {
  margin: 150px 200px 50px 300px;
}

.consulta .consultaContainer .consultaAddPaciente .consultaAddCol {
  margin: 0px 0px 20px 0px;
  font-size: 20px;
}

.consulta .consultaContainer .consultaAddPaciente .consultaAddInput {
  width: 260px;
  background-color: #f9f9f9;
}

.consulta .consultaContainer .consultaSearch {
  background-color: #f9f9f9;
  margin: 100px 50px 100px 200px;
  padding: 25px 50px 50px 50px;
}

.consulta .consultaContainer .consultaSearch span {
  font-size: 20px;
}

.consulta .consultaContainer .consultaSearch .consultaSearchInput {
  background-color: #f9f9f9;
}

.consulta .consultaContainer .consultaSearch .consultaIconGroup {
  margin: 50px 50px 0px 50px;
}

.consulta .consultaContainer .consultaSearch .consultaIconGroup .gameFoto {
  height: 100px;
  width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.consulta .consultaContainer .consultaSearch .consultaIconGroup .nextFoto {
  height: 75px;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.consulta .buttonPlay {
  margin: 0px 0px 0px 0px;
  font-size: 20px;
  padding: 4px 50px 8px 50px;

  background-color: #ffffff;
  color: #374785;
  border-color: #374785;
  border: 3px solid;
}

.consulta .buttonPlay:hover {
  background-color: #374785 !important;
  color: white !important;
  border: 3px solid #374785;
}
</style>