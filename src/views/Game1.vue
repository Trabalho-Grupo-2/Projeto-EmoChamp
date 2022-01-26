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
      <div v-if="isCorrect">
        <div @click="handleRightQuestionpt2()" id="displayWrongRight">
          </div>
        <img id="correctbutton" src="../assets/correct.png" alt="correctbutton">
      </div>
      <div v-if="isWrong">
        <div @click="handleWrongQuestionpt2()" id="displayWrongRight">
          </div>
        <img id="wrongbutton" src="../assets/wrong.png" alt="correctbutton">
      </div>
      <p id="question">{{question}}</p>
      <b-container class="containerGame01">
        <b-row align-h="center" align-v="center" class="containerRow01">
          <b-col cols="3">
            <img class="gameFoto" id="gamefoto1" :src="images[0].url" @click.prevent="verifyAnswer($event)" />
            <p class="imgnumber" align="center">1</p>
          </b-col>
          <b-col cols="3">
            <img class="gameFoto" id="gamefoto2" :src="images[1].url" @click="verifyAnswer($event)" />
            <p class="imgnumber" align="center">2</p>
          </b-col>
        </b-row>

        <b-row align-h="center" align-v="start" class="containerRow02">
          <b-col cols="3">
            <img class="gameFoto" id="gamefoto3" :src="images[2].url" @click="verifyAnswer($event)" />
            <p class="imgnumber" align="center">3</p>
          </b-col>
          <b-col cols="3">
            <img class="gameFoto" id="gamefoto4" :src="images[3].url" @click="verifyAnswer($event)" />
            <p class="imgnumber" align="center">4</p>
          </b-col>
        </b-row>
        <p id="progressNumber">{{count}}/20</p>
      </b-container>
    </div>
    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";
import { mapGetters, mapMutations } from 'vuex';


export default {
  data() {
    return {
        roll: 0,
        roll2: 0,
        count: 0,
        img_src: "../assets/questions/",
        question: "",
        images: [
            {url : "", category : ""},
            {url : "", category : ""},
            {url : "", category : ""},
            {url : "", category : ""},
    ],
        isCorrect: false,
        isWrong: false
    }
  },
  components: {
    Navbar,
    FooterX,
  },
  computed: {
        ...mapGetters([
            'getCategories','getLoggedUser','getBadges',
        ])
    },
   methods: {
     ...mapMutations([
            'INCREMENT_TOTAL_ANSWERS','INCREMENT_RIGHT_ANSWERS','PUSH_BADGE'
        ]),
       getQuestion() {
           this.img_src = "../assets/questions/";
           this.roll = Math.round(Math.random() * 7);
           this.roll2 = Math.round(Math.random() * 5);
           if(this.roll == 0){
               this.img_src+= `${this.getCategories[0]}/${this.roll2}.jpg`
           }
           if(this.roll == 1){
               this.img_src+= `${this.getCategories[1]}/${this.roll2}.jpg`
           };
           if(this.roll == 2){
               this.img_src+= `${this.getCategories[2]}/${this.roll2}.jpg`
           };
           if(this.roll == 3){
               this.img_src+= `${this.getCategories[3]}/${this.roll2}.jpg`
           };
           if(this.roll == 4){
               this.img_src+= `${this.getCategories[4]}/${this.roll2}.jpg`
           };
           if(this.roll == 5){
               this.img_src+= `${this.getCategories[5]}/${this.roll2}.jpg`
           };
           if(this.roll == 6){
               this.img_src+= `${this.getCategories[6]}/${this.roll2}.jpg`
           }
       },
       getQuestionGroup(){
           this.getQuestion();
           this.images[0].url = this.img_src
           this.images[0].category = this.getCategories[this.roll]
           this.getQuestion();
           this.images[1].url = this.img_src
           this.images[1].category = this.getCategories[this.roll]
           this.getQuestion();
           this.images[2].url = this.img_src
           this.images[2].category = this.getCategories[this.roll]
           this.getQuestion();
           this.images[3].url = this.img_src
           this.images[3].category = this.getCategories[this.roll]
           this.roll = Math.round(Math.random() * 3)
           if(this.roll == 0){
               this.question = this.images[0].category
           };
           if(this.roll == 1){
               this.question = this.images[1].category
           };
           if(this.roll == 2){
               this.question = this.images[2].category
           };
           if(this.roll == 3){
               this.question = this.images[3].category
           };
           console.log(this.images)
           console.log("pergunta: " + this.question)
       },
       verifyAnswer(event){
         let clickedLink = event.target.src
         this.count++;
         if(clickedLink.includes(this.question)){
           this.INCREMENT_RIGHT_ANSWERS(this.roll+1);
           this.INCREMENT_TOTAL_ANSWERS(this.roll+1);
           this.handleRightQuestion();
         }
         else{
           this.INCREMENT_TOTAL_ANSWERS(this.roll+1);
           this.handleWrongQuestion();
         }

       },
       handleRightQuestion(){
         this.isCorrect = true;
       },
       handleRightQuestionpt2(){
         this.isCorrect = false;
         this.getQuestionGroup();
       },
       handleWrongQuestion(){
         this.isWrong = true;
       },
       handleWrongQuestionpt2(){
         this.isWrong = false;
         this.getQuestionGroup();
       }
   },
   beforeMount () {
       this.getQuestionGroup();
   },
   watch: {
     count: function() {
       if(this.count == 20){
       this.$router.push({name: 'Profile' , params: {user_id: this.getLoggedUser.id}})
       }
     }
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
  margin-top: 30px;
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
.container_game1 #question{
  position: absolute;
  margin-left: 33%;
  margin-top: 1%;
  font-size: 1.2em;
}
.container_game1 .imgnumber{
  margin-left: -20%;
}
#correctbutton{
  position:absolute;
  margin-left: 29%;
  margin-top: 15%;
  border-radius: 100px;
}
#wrongbutton{
  position:absolute;
  margin-left: 28%;
  margin-top: 15%;
  border-radius: 100px;
  width:190px;
}
#displayWrongRight{
  position:absolute;
  background-color: rgba(0,0,0,0.2);
  width: 1090px;
  height: 630px;
}
#progressNumber{
  position:absolute;
  margin-left: 55%;
  margin-top: -3%;
}
</style>