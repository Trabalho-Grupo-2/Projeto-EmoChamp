<template>
  <div>
    <Navbar />
    <img id="pagemarker2" src="../assets/activepagemarker.svg" alt="marker" />
    <div class="g1instructions">
      <h2>Jogo 1 - Reconhecimento de Emoções</h2>
      <br />
      <p>Instruções:</p>
      <ol>
        <li>Na área de jogo podes encontrar 4 imagens.</li>
        <li>Seleciona a imagem que achas que corresponde à emoção descrita.</li>
        <li>Continua a adivinhar até que o jogo acabe.</li>
        <li>Diverte-te!</li>
      </ol>
    </div>

    <div class="container_game1">
      <b-container class="containerGame01">
        <b-row align-h="center" align-v="center" class="containerRow01">
          <b-col cols="3">
            <img class="gameFoto" id="gamefoto1" :src="images.img1.url" @click.prevent="verifyAnswer()" />
            <p align="center">1</p>
          </b-col>
          <b-col cols="3">
            <img class="gameFoto" id="gamefoto2" :src="images.img2.url" @click="verifyAnswer()" />
            <p align="center">2</p>
          </b-col>
        </b-row>

        <b-row align-h="center" align-v="start" class="containerRow02">
          <b-col cols="3">
            <img class="gameFoto" id="gamefoto3" :src="images.img3.url" @click="verifyAnswer()" />
            <p align="center">3</p>
          </b-col>
          <b-col cols="3">
            <img class="gameFoto" id="gamefoto4" :src="images.img4.url" @click="verifyAnswer()" />
            <p align="center">4</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";
import { mapGetters } from 'vuex';


export default {
  data() {
    return {
        roll: 0,
        roll2: 0,
        img_src: "../assets/questions/",
        question: "",
        images: {
            img1: {url : "", category : ""},
            img2: {url :"", category : ""},
            img3: {url :"", category : ""},
            img4: {url :"", category : ""},
        }
    }
  },
  components: {
    Navbar,
    FooterX,
  },
  computed: {
        ...mapGetters([
            'getCategories',
        ])
    },
   methods: {
       getQuestion() {
           this.img_src = "../assets/questions/";
           this.roll = Math.round(Math.random() * 7);
           this.roll2 = Math.round(Math.random() * 5);
           if(this.roll == 0){
               this.roll++;
           }
           if(this.roll == 1){
               this.img_src+= `${this.getCategories[0]}/${this.roll2}.jpg`
           };
           if(this.roll == 2){
               this.img_src+= `${this.getCategories[1]}/${this.roll2}.jpg`
           };
           if(this.roll == 3){
               this.img_src+= `${this.getCategories[2]}/${this.roll2}.jpg`
           };
           if(this.roll == 4){
               this.img_src+= `${this.getCategories[3]}/${this.roll2}.jpg`
           };
           if(this.roll == 5){
               this.img_src+= `${this.getCategories[4]}/${this.roll2}.jpg`
           };
           if(this.roll == 6){
               this.img_src+= `${this.getCategories[5]}/${this.roll2}.jpg`
           }
           if(this.roll == 7){
               this.img_src+= `${this.getCategories[6]}/${this.roll2}.jpg`
           }
       },
       getQuestionGroup(){
           this.getQuestion();
           this.images.img1.url = this.img_src
           this.images.img1.category = this.getCategories[this.roll -1]
           this.getQuestion();
           this.images.img2.url = this.img_src
           this.images.img2.category = this.getCategories[this.roll -1]
           this.getQuestion();
           this.images.img3.url = this.img_src
           this.images.img3.category = this.getCategories[this.roll -1]
           this.getQuestion();
           this.images.img4.url = this.img_src
           this.images.img4.category = this.getCategories[this.roll -1]
           this.roll = Math.round(Math.random() * 3)
           if(this.roll == 0){
               this.question = this.images.img1.category
           };
           if(this.roll == 1){
               this.question = this.images.img2.category
           };
           if(this.roll == 2){
               this.question = this.images.img3.category
           };
           if(this.roll == 3){
               this.question = this.images.img4.category
           };
           console.log(this.images);
           console.log(this.question);
       },
       verifyAnswer: function (e){
           if (e){
               console.log("sucess")
               alert(e.target.tagName);
           }
       }
   },
   beforeMount () {
       this.getQuestionGroup();
   },
};
</script>

<style>
#pagemarker2 {
  position: absolute;
  left: 580px;
  top: 0px;
  z-index: -1;
}

.g1instructions {
  margin-left: 100px;
  margin-top: 50px;
  color: #24305e;
}

.container_game1 {
  margin-top: 50px;
  margin-bottom: 150px;
  margin-left: 170px;
  height: 630px;
  width: 1090px;
  background-image: url("../assets/game_container.svg");
  align-items: center;
}

.container_game1 .containerGame01 {
  margin: 100px 0px 0px 0px;
}

.container_game1 .containerGame01 .gameFoto {
  margin-bottom: 20px;
  height: 200px;
  width: 200px;
}
.container_game1 .containerGame01 .gameFoto:hover {
  cursor: pointer;
}

.container_game1 .containerGame01 .containerRow01 {
  padding: 30px 0px 20px 0px;
}

.container_game1 .containerGame01 .containerRow02 {
  padding: 30px 0px 25px 0px;
}
</style>