<template>
  <div>
    <Navbar />
    <img id="pagemarker2" src="../assets/activepagemarker.svg" alt="marker" />
    <div class="g1instructions">
      <h2>Jogo 2 - Representação de Emoções</h2>
      <br />
      <p>Instruções:</p>
      <ol>
        <li>Será dada uma emoção.</li>
        <li>Terás de representar através da webcam a emoção pedida.</li>
        <li>Repete o passo 2 até que o jogo acabe.</li>
        <li>Diverte-te!</li>
      </ol>
    </div>
    <div class="container_game1">
      <div class='ui container'>
        <video v-if="!imageData.image" ref="video" class="camera-stream" />
        <div class='ui divider'></div>
</div>
    </div>
    
    <FooterX />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterX from "../components/FooterX.vue";

export default {
  data() {
    return {
      mediaStream: null,
      imageData: {
        image: "",
        image_orientation: 0,
      },
    };
  },
  components: {
    Navbar,
    FooterX,
  },
  methods: {},
  mounted() {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(mediaStream => {
                    this.$refs.video.srcObject = mediaStream;
                    this.$refs.video.play()
                    this.mediaStream = mediaStream                   
            })   
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
}
video{
  width: 60%;
  margin-left: 20%;
  margin-top: 7%;
}
</style>
