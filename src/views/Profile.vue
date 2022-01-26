<template>
  <div>
    <Navbar />

    <div class="perfilImg">
      <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
      <img
        id="redBaloonTop"
        src="../assets/redelipse.svg"
        alt="Red Baloon"
        style="margin-top: 60px"
      />
    </div>

    <div class="perfil">
      <b-container class="perfilContainer">
        <div class="perfilRowBadge">
          <b-row align-content="center">
            <b-col>
              <div id="avatarpick" v-if="showImagePanel">
              <img @click="updateAvatar($event)" src="../assets/_badges/angry.png" alt="">
              <img @click="updateAvatar($event)" src="../assets/_badges/disgusted.png" alt="">
              <img @click="updateAvatar($event)" src="../assets/_badges/fearful.png" alt="">
              <img @click="updateAvatar($event)" src="../assets/_badges/happy.png" alt="">
              <img @click="updateAvatar($event)" src="../assets/_badges/monster (1).png" alt="">
              <img @click="updateAvatar($event)" src="../assets/_badges/monster (3).png" alt="">
              <img @click="updateAvatar($event)" src="../assets/_badges/sad.png" alt="">
              <img @click="updateAvatar($event)" src="../assets/_badges/surprised.png" alt="">
              </div>
              <img @click="choosemyImage()" id="profilePic" :src="getLoggedUser.avatar" alt="">
              <img
                @click="choosemyImage()"
                class="perfilIcon"
                src="../assets/avatarcircle.png"
                alt="perfilIcon"
              />
              <span class="perfilSpan">{{ getLoggedUser.name }}</span>
            </b-col>

            <b-col cols="8" class="perfilAbout">
              <p class="perfilTag">Sobre mim:</p>
              <div id="aboutmeSection">
                {{ getLoggedUser.description }}
              </div>
            </b-col>
          </b-row>

          <div class="perfilRow">
            <b-row>
              <b-col class="perfilDataName">
                <p>Nome Completo:</p>
              </b-col>
              <b-col class="perfilDataNameValue">
                <p>
                  {{ getLoggedUser.name }}
                </p>
              </b-col>
              <b-col> </b-col>
            </b-row>

            <b-row>
              <b-col class="perfilDataEmail">
                <p>Email:</p>
              </b-col>
              <b-col class="perfilDataEmailValue">
                <p>
                  {{ getLoggedUser.email }}
                </p>
              </b-col>
              <b-col>
                <b-button
                  v-b-modal.modal-center
                  @click="modalShow = !modalShow"
                  type="button"
                  variant="outline-primary"
                  size="lg"
                  class="buttonPlay"
                >
                  Editar
                </b-button>
              </b-col>
            </b-row>
          </div>
        </div>

        <div class="perfilCarousel">
          <b-row align-h="center" align-v="center" class="perfilCarouselRow">
            <b-col cols="2">
              <p class="perfilCarouselTitle" tex>Badges</p>
            </b-col>
          </b-row>
          <b-row class="perfilBadgeGroup" align-v="center" align-h="center">
            <b-col sm align-self="center">
              <img src="../assets/seta-left.svg" class="nextFoto" />
            </b-col>
            <b-col sm>
              <img class="gameFoto" src="../assets/Badges/Group179.svg" />
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
          </b-row>
        </div>
      </b-container>

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
                v-model="form.email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Password:"
              label-for="password-input"
              invalid-feedback="Password is required"
            >
              <b-form-input
                id="password-input"
                type="password"
                v-model="form.password"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Confirmar Password:"
              label-for="password-input"
              invalid-feedback="Password is required"
            >
              <b-form-input
                id="password-input"
                type="password"
                v-model="form.password2"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Sobre mim:"
              label-for="sobremim-input"
              invalid-feedback="Sobremim is required"
            >
              <b-form-textarea
                id="sobremim-input"
                v-model="form.description"
              ></b-form-textarea>
            </b-form-group>
          </form>
        </b-modal>
      </div>
    </div>

    <div class="perfilImg">
      <img id="bluebg" src="../assets/ondasmakerBaixo.svg" alt="marker" />
    </div>

    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      chosenAvatar: "",
      showImagePanel: false,
      modalShow: false,
      form: {
        name: "",
        email: "",
        password: "",
        password2: "",
        description: "",
      },
    };
  },
  components: {
    Navbar,
    FooterX,
  },
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
  methods: {
    choosemyImage() {
      this.showImagePanel = !this.showImagePanel;
    },
    resetModal() {
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
      this.form.password2 = "";
      this.form.description = "";
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      this.updateUser();
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    ...mapMutations([
      "UPDATE_USERNAME",
      "UPDATE_EMAIL",
      "UPDATE_PASSWORD",
      "UPDATE_DESCRIPTION",
      "UPDATE_AVATAR",
      "SYNC_CURRENT_USER"
    ]),
    updateUser() {
      console.log(this.form.name);
      console.log(this.form.email);
      console.log(this.form.password);
      console.log(this.form.description);
      if (this.form.password == this.form.password2) {
        this.UPDATE_USERNAME(this.form.name);
        this.UPDATE_EMAIL(this.form.email);
        this.UPDATE_PASSWORD(this.form.password);
        this.UPDATE_DESCRIPTION(this.form.description);
        this.SYNC_CURRENT_USER(this.getLoggedUser.id)
        this.modalShow = false;
      } else {
        alert("As Passwords são diferentes");
      }
    },
    updateAvatar(event){
      let choosedAvatar = event.target.src
      this.chosenAvatar = choosedAvatar;
      this.UPDATE_AVATAR(this.chosenAvatar);
      this.SYNC_CURRENT_USER(this.getLoggedUser.id);
      this.showImagePanel = false;
    }
  },
};
</script>

<style>
.perfilImg #pagemarker {
  position: absolute;
  left: 725px;
  top: 0px;
  z-index: -1;
}

.perfilImg #redBaloonTop {
  margin-top: 60px;
  top: 200px;
  position: absolute;
}

.perfilImg #bluebg {
  position: absolute;
  width: 100%;
  height: auto;
  top: 1000px;
  z-index: -2;
}

.perfil {
  color: #24305e;
}

.perfil .perfilContainer {
  margin: 50px 50px 450px 50px;
}

.perfil .perfilContainer .perfilRowBadge {
  margin: 100px 100px 100px 300px;
}

.perfil .perfilContainer .perfilRowBadge .perfilIcon {
  height: 125px;
  width: 125px;
  margin: 0px 30px 15px 0px;
}

.perfil .perfilContainer .perfilRowBadge .perfilSpan {
  position: absolute;
  margin-left: -7.75%;
  margin-top: 10%;
}

.perfil .perfilContainer .perfilRowBadge .perfilAbout {
  margin: 0px 0px 0px 40px;
}

.perfil .perfilContainer .perfilRowBadge .perfilRow {
  margin: 100px 0px 0px 0px;
}

.perfil .buttonPlay {
  margin: 0px 0px 0px 0px;
  font-size: 20px;
  padding: 4px 50px 8px 50px;

  background-color: #ffffff;
  color: #374785;
  border-color: #374785;
  border: 3px solid;
}

.perfil .buttonPlay:hover {
  background-color: #374785 !important;
  color: white !important;
  border: 3px solid #374785;
}

.perfil .perfilCarousel {
  margin: 100px 100px 50px 100px;
}

.perfil .perfilCarousel {
  background-color: #f9f9f9;
  width: 80%;
  margin-left: 15%;
}

.perfil .perfilCarousel .perfilCarouselRow .perfilCarouselTitle {
  color: #24305e;
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
}

.perfil .perfilCarousel .perfilBadgeGroup {
  padding: 50px 0px 50px 0px;
}

.perfil .perfilCarousel .perfilBadgeGroup .gameFoto {
  height: 150px;
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.perfil .perfilCarousel .perfilBadgeGroup .nextFoto {
  height: 75px;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
#aboutmeSection {
  border: 3px solid #374785;
  border-radius: 10px;
  padding: 10px;
  width: 500px;
  height: 200px;
  overflow: hidden;
}
#uploadImage {
  position: absolute;
  margin-top: -5%;
  margin-left: -10%;
}
#avatarpick img {
  width: 80px;
  padding: 5px;
}
#avatarpick img:hover {
cursor: pointer;
}
#profilePic {
  position: absolute;
  width: 80px;
  margin-left: 1.5%;
  margin-top: 1.5%
}
</style>