<template>
  <div class="home">
    <Navbar></Navbar>
    <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
    <img id="bluebg" src="../assets/homebackground.svg" alt="marker" />
    <div class="callforaction">
      <h1>Melhora a tua capacidade de reconhecer emoções</h1>
      <p>
        Aprende a distinguir entre diferentes emoções com a ajuda do nosso
        website.<br />
        Apresentamos diferentes jogos para reconhecer e representar emoções,
        efetua<br />
        o registo para mais funcionalidades.
      </p>
      <button id="cfaplay">Jogar</button>
    </div>
    <img id="redelipse" src="../assets/redelipse.svg" alt="red elipse" />
    <div class="keywordsgroup">
      <div class="group1">
        <img
          class="yellowelipse"
          src="../assets/keywordssphere.svg"
          alt="yellow elipse"
        />
        <img
          id="elearningsvg"
          src="../assets/Landing Page Balloons/eLearning.svg"
          alt="e learning icon"
        />
      </div>
      <div class="group2">
        <img
          class="yellowelipse"
          src="../assets/keywordssphere.svg"
          alt="yellow elipse"
        />
        <img
          id="childsafesvg"
          src="../assets/Landing Page Balloons/Child Safe.svg"
          alt="child safe icon"
        />
      </div>
      <div class="group3">
        <img
          class="yellowelipse"
          src="../assets/keywordssphere.svg"
          alt="yellow elipse"
        />
        <img
          id="gamificationsvg"
          src="../assets/Landing Page Balloons/gamification.svg"
          alt="controller icon"
        />
      </div>
      <div class="group4">
        <img
          class="yellowelipse"
          src="../assets/keywordssphere.svg"
          alt="yellow elipse"
        />
        <img
          id="supervisedlearningsvg"
          src="../assets/Landing Page Balloons/supervisedLearning.svg"
          alt="supervised icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style scoped>
.home #bluebg {
  position: absolute;
  width: 1540px;
  height: 705px;
  right: 0px;
  top: -80px;
  z-index: -2;
}
.home .callforaction h1 {
  position: absolute;
  font-size: 30px;
  top: 196px;
  left: 371px;
  color: #24305e;
  font-family: Comfortaa_Bold, Playfair_SemiBold, Arial;
  line-height: 50px;
}
.home .callforaction p {
  position: absolute;
  top: 274px;
  left: 635px;
  text-align: justify;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  color: #24305e;
  line-height: 35px;
  font-size: 15px;
}
.home .callforaction #cfaplay {
  position: absolute;
  top: 422px;
  left: 995px;
  background-color: #ffffff;
  border: 3px solid #374785;
  border-radius: 5px;
  padding: 5px 40px;
  color: #24305e;
  text-align: center;
  font-family: Comfortaa_Bold, Playfair_Bold, Arial;
  font-size: 25px;
  text-decoration: none;
}
.home .callforaction #cfaplay:hover {
  background-color: #374785;
  color: #ffffff;
}
.home #pagemarker {
  position: absolute;
  left: 412px;
  top: 0px;
  z-index: -1;
}
.home #redelipse {
  position: absolute;
  width: 300px;
  height: 300px;
  left: -100px;
  top: 570px;
}
.home .keywordsgroup {
  position: absolute;
  top: 650px;
  left: 300px;
  overflow: hidden;
}
.home .keywordsgroup .group1 {
  position: relative;
}
.home .keywordsgroup .group1 #elearningsvg {
  position: relative;
  width: 77px;
  height: 70px;
  margin-left: -118px;
  fill: #24305e;
}
</style>
