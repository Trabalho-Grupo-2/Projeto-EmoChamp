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
          alt="eLearning icon"
        />
        <p>eLearning</p>
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
        <p>
          Seguro para <br />
          Crianças
        </p>
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
        <p>
          Elementos de <br />
          Gamificação
        </p>
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
        <p>
          Aprendizagem <br />
          Supervisionada
        </p>
      </div>
    </div>
    <div class="about">
      <h2>Quem nós somos...</h2>
      <p>
        Emochamp é um website com jogos orientados para <br />
        crianças com perturbações no espetro do autismo (PEA) <br />
        para promover o reconhecimento de emoções através de <br />
        imagens e reprodução de emoções. Uma demonstração <br />
        geral de funcionalidades é apresenta no vídeo ao lado <br />
        direito.
      </p>
      <button id="aboutplay">Jogar</button>
      <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
      </iframe>
    </div>
    <FooterX></FooterX>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";

export default {
  components: {
    Navbar,
    FooterX,
  },
};
</script>
<style scoped>
@font-face {
  font-family: Comfortaa_Bold;
  src: "../assets/fonts/Comfortaa-Bold.ttf";
}
@font-face {
  font-family: Comfortaa_Regular;
  src: "../assets/fonts/Comfortaa-Regular.ttf";
}
@font-face {
  font-family: Playfair_Regular;
  src: "../assets/fonts/PlayfairDisplay-Regular.ttf";
}
@font-face {
  font-family: Playfair_SemiBold;
  src: "../assets/fonts/PlayfairDisplay-SemiBold.ttf";
}

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
  left: 400px;
  color: #24305e;
  font-family: Comfortaa_Bold, Playfair_SemiBold, Arial;
  line-height: 50px;
}
.home .callforaction p {
  position: absolute;
  top: 274px;
  left: 560px;
  text-align: justify;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  color: #24305e;
  line-height: 35px;
  font-size: 15px;
}
.home .callforaction #cfaplay {
  position: absolute;
  top: 422px;
  left: 945px;
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
.home .callforaction #cfaplay:hover,
.home .about #aboutplay:hover {
  background-color: #374785;
  color: #ffffff;
}
.home #pagemarker {
  position: absolute;
  left: 402px;
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
  display: flex;
}
.home .keywordsgroup .group1 {
  position: relative;
  width: 300px;
}
.home .keywordsgroup .group1 #elearningsvg {
  position: relative;
  width: 77px;
  height: 70px;
  margin-left: -118px;
  filter: invert(22%) sepia(73%) saturate(677%) hue-rotate(195deg)
    brightness(95%) contrast(88%);
}
.home .keywordsgroup .group1 p {
  position: relative;
  color: #374785;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  font-size: 20px;
  right: -32px;
  top: 10px;
}
.home .keywordsgroup .group2 {
  position: relative;
  width: 300px;
}
.home .keywordsgroup .group2 #childsafesvg {
  position: relative;
  width: 100px;
  height: 100px;
  margin-left: -125px;
  filter: invert(22%) sepia(73%) saturate(677%) hue-rotate(195deg)
    brightness(95%) contrast(88%);
}
.home .keywordsgroup .group2 p {
  position: relative;
  color: #374785;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  font-size: 20px;
  right: -25px;
  top: 10px;
  text-align: justify;
}
.home .keywordsgroup .group3 {
  position: relative;
  width: 300px;
}
.home .keywordsgroup .group3 #gamificationsvg {
  position: relative;
  width: 100px;
  height: 100px;
  margin-left: -125px;
  filter: invert(22%) sepia(73%) saturate(677%) hue-rotate(195deg)
    brightness(95%) contrast(88%);
}
.home .keywordsgroup .group3 p {
  position: relative;
  color: #374785;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  font-size: 20px;
  right: -15px;
  top: 10px;
  text-align: justify;
}
.home .keywordsgroup .group4 {
  position: relative;
  width: 300px;
}
.home .keywordsgroup .group4 #supervisedlearningsvg {
  position: relative;
  width: 100px;
  height: 100px;
  margin-left: -125px;
  filter: invert(22%) sepia(73%) saturate(677%) hue-rotate(195deg)
    brightness(95%) contrast(88%);
}
.home .keywordsgroup .group4 p {
  position: relative;
  color: #374785;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  font-size: 20px;
  right: -15px;
  top: 10px;
}
.home .about {
  margin-top: 1000px;
  overflow: hidden;
}
.home .about h2 {
  position: relative;
  font-size: 30px;
  left: 200px;
  color: #24305e;
  font-family: Comfortaa_Bold, Playfair_SemiBold, Arial;
  line-height: 50px;
}
.home .about p {
  position: relative;
  left: 200px;
  top: 50px;
  text-align: justify;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  color: #374785;
  line-height: 35px;
  font-size: 15px;
}
.home .about #aboutplay {
  top: -150px;
  left: 200px;
  position: relative;
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
.home .about iframe {
  position: relative;
  top: -225px;
  left: 600px;
  width: 500px;
  height: 276px;
}
</style>
