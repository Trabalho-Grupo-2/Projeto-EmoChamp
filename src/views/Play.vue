<template>
  <div>
    <Navbar />
    <img id="pagemarker1" src="../assets/activepagemarker.svg" alt="marker" />
    <img
      src="../assets/redelipse.svg"
      alt="bg baloon"
      style="margin-top: 60px"
    />
    <div class="w-100 p-3 text-center" style="margin-bottom: -150px">
      <div class="b-row">
        <h1
          class="display-4"
          style="color: #374785; font-size: 30px; margin-top: -300px"
        >
          Escolhe o o jogo que pretendes jogar!
        </h1>
      </div>
      <div class="b-row" style="height: 100px"></div>
      <div
        class="container"
        style="width: 75%; display: flex; justify-content: space-around; margin-bottom: 500px;"
      >
        <div class="b-col" id="container2">
          <img
            src="../assets/selectgameborder.svg"
            alt="Gameselectborder"
            id="gameborder1"
            style="
              z-index: -1;
              position: absolute;
              left: 255px;
              filter: invert(46%) sepia(12%) saturate(15%) hue-rotate(14deg)
                brightness(101%) contrast(81%);
              display: none;
            "
          />
          <br />
          <p style="color: #374785; font-size: 20px">Jogo 1</p>
          <img src="../assets/jogo1.jpg" alt="game1preview" />
          <br /><br />
          <p style="color: #374785; font-size: 20px">
            Reconhecimento de Emoções
          </p>
          <p style="color: #374785; font-size: 12px">
            Seleciona entre 4 imagens, a que corresponde a que achas<br />
            que corresponde à emoção descrita, continua a adivinhar até<br />
            que o jogo acabe.
          </p>
          <b-button
            type="button"
            id="button1"
            @click="$router.push({name:'Game1', params: {user_id: getLoggedUser.id}})"
            variant="outline-primary"
            size="lg"
            class="buttonPlayGame"
          >
            Jogar
          </b-button>
        </div>
        <div class="b-col" id="container3">
          <img
            src="../assets/selectgameborder.svg"
            alt="Gameselectborder"
            id="gameborder2"
            style="
              z-index: -1;
              position: absolute;
              left: 800px;
              filter: invert(46%) sepia(12%) saturate(15%) hue-rotate(14deg)
                brightness(101%) contrast(81%);
              display: none;
            "
          />
          <br />
          <p style="color: #374785; font-size: 20px">Jogo 2</p>
          <img src="../assets/jogo2.jpg" alt="game2preview" />
          <br /><br />
          <p style="color: #374785; font-size: 20px">
            Reprodução de Expressões
          </p>
          <p style="color: #374785; font-size: 12px">
            Será dada uma emoção, através da webcam terás que<br />
            representar a expressão que é pedida. Continua a adivinhar até<br />
            que o jogo acabe.
          </p>
          <b-button
            type="button"
            @click="$router.push({name: 'Game2' , params: {user_id: getLoggedUser.id}})"
            variant="outline-primary"
            size="lg"
            id="button2"
            class="buttonPlayGame"
          >
            Jogar
          </b-button>
        </div>
      </div>
    </div>
    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";
import $ from "jquery";
import { mapGetters } from 'vuex';

export default {
  components: {
    Navbar,
    FooterX,
  },
  computed: {
    ...mapGetters([
      'getLoggedUser','getLoggedState',
    ])
  },
  mounted() {
    $(function () {
      $("#container2").hover(function () {
        $("#gameborder1").css("display", "inline");
      });     
    });
    $(function () {
      $("#container3").hover(function () {
        $("#gameborder2").css("display", "inline");
      });
    });
    $(function () {
      $("#container2").click(function () {
        $("#button1").css("display", "inline");
        $("#gameborder1").css("filter", "none");
        $("#gameborder2").css("display", "none");
        $("#button2").css("display", "none");
        $(".container").css("margin-bottom", "-75px");
      });
    });
    $(function () {
      $("#container3").click(function () {
        $("#button2").css("display", "inline");
        $("#gameborder2").css("filter", "none");
        $("#gameborder1").css("display", "none");
        $("#button1").css("display", "none");
        $(".container").css("margin-bottom", "-75px");
      });
    });
  },
};
</script>

<style>
.buttonPlayGame {
  margin: 20px 0px 500px 20px !important;
  font-size: 25px !important;
  padding: 4px 50px 8px 50px !important ;

  background-color: #ffffff !important;
  color: #374785 !important;
  border-color: #374785 !important;
  border: 3px solid !important;
  border-radius: 20px !important;
}

.buttonPlayGame:hover {
  background-color: #374785 !important;
  color: white !important;
  border: 3px solid #374785 !important;
}
#button1, #button2 {
  display: none;
}
#pagemarker1 {
        position: absolute;
        left: 580px;
        top: 0px;
        z-index: -1;
    }
</style>
