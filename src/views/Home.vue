<template>
    <div>
        <Navbar />

<div class="homeImg">

        <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
        <img id="redBaloonTop" src="../assets/redelipse.svg" alt="Red Baloon" style="margin-top: 60px" />
        <img id="bluebg" src="../assets/homebackground.svg" alt="marker" />

</div>


        <div class="div">

            <b-container class="homeTitle">
                <b-row class="text-center">
                    <b-col>
                        <h1 class="title">
                            Melhora a tua capacidade de reconhecer emoções
                        </h1>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="6"></b-col>
                    <b-col cols="5" align-self="end">
                        <p class="subTitle">
                            Aprende a distinguir entre diferentes emoções com a ajuda do nosso website. Apresentamos
                            diferentes jogos para reconhecer e representar emoções, efetua o registo para mais
                            funcionalidades.
                        </p>
                    </b-col>
                    <b-col cols="1"></b-col>
                </b-row>

                <b-row>
                    <b-col cols="9"></b-col>
                    <b-col cols="3">
                            <b-button type="button" @click="$router.push({name: 'Play'})" variant="outline-primary" size="lg"
                            class="buttonPlay">
                            Jogar
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>

            <b-container class="homeContent">
                <b-row class="keywordsgroup">
                    <div>
                        <img class="yellowelipse" src="../assets/keywordssphere.svg" alt="yellow elipse" />
                        <img id="elearningsvg" class="yellowSVG" src="../assets/Landing Page Balloons/eLearning.svg"
                            alt="eLearning icon" />
                         <p class="textElipse">
                            eLearning
                        </p>
                    </div>

                    <div>
                        <img class="yellowelipse" src="../assets/keywordssphere.svg" alt="yellow elipse" />
                        <img class="yellowSVG" src="../assets/Landing Page Balloons/Child Safe.svg"
                            alt="child safe icon" />
                        <p class="textElipse">
                            Seguro para <br />
                            Crianças
                        </p>
                    </div>

                    <div>
                        <img class="yellowelipse" src="../assets/keywordssphere.svg" alt="yellow elipse" />
                        <img class="yellowSVG" src="../assets/Landing Page Balloons/gamification.svg"
                            alt="controller icon" />
                        <p class="textElipse">
                            Elementos de <br />
                            Gamificação
                        </p>
                    </div>

                    <div>
                        <img class="yellowelipse" src="../assets/keywordssphere.svg" alt="yellow elipse" />
                        <img class="yellowSVG" src="../assets/Landing Page Balloons/supervisedLearning.svg"
                            alt="supervised icon" />
                        <p class="textElipse">
                            Aprendizagem <br />
                            Supervisionada
                        </p>
                    </div>
                </b-row>

                <b-row class="videoRow" align-content="center">
                    <b-col cols="1"></b-col>
                    <b-col cols="5" align-self="center" class="videoText">
                        <h2 class="title">
                            Quem nós somos...
                        </h2>

                        <p class="text">
                            Emochamp é um website com jogos orientados para crianças com  perturbações no espetro do autismo (PEA) para promover o reconhecimento de emoções através de imagens e reprodução de emoções. Uma demonstração geral de funcionalidades é apresenta no vídeo ao lado direito.
                        </p>

                        <b-button type="button" @click="$router.push({name: 'Play'})" variant="outline-primary" size="lg"
                            class="buttonPlay">
                            Jogar
                        </b-button>
                    </b-col>
                
                    <b-col cols="5" align-self="start" class="video">
                        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
                        </iframe>
                    </b-col>
                    <b-col cols="1"></b-col>
                </b-row>
            </b-container>

        </div>

        <img id="redBaloonBottom" src="../assets/redelipse.svg" alt="Red Baloon" />

        <FooterX />
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

<style>
    .homeImg #redBaloonTop {
        margin-top: 60px;
        top: 500px;
        position: absolute;
    }

    .homeImg #redBaloonBottom {
        margin-top: 60px;
        top: 1300px;
        left: 90%;
        transform: rotate(180deg);
        position: absolute;
    }

    .homeImg #bluebg {
        position: absolute;
        width: 1540px;
        height: 705px;
        right: 0px;
        top: -80px;
        z-index: -2;
    }

    .homeImg #pagemarker {
        position: absolute;
        left: 432px;
        top: 0px;
        z-index: -1;
    }

    .div {
        margin: 60px 50px 10px 50px;
    }

    .homeTitle {
        color: #24305E;
    }

    .homeTitle .title {
        margin: 0px 0px 60px 140px;
        font-size: 38px;
    }

    .homeTitle .subTitle {
        line-height: 40px;
        font-size: 15px;
    }

    .homeTitle .buttonPlay {
        margin: 20px 0px 500px 20px;
        font-size: 25px;
        padding: 4px 50px 8px 50px;

        background-color: #ffffff;
        color: #374785;
        border-color: #374785;
        border: 3px solid;
    }

    .homeTitle .buttonPlay:hover {
        background-color: #374785 !important;
        color: white !important;
        border: 3px solid #374785;
    }

    .homeContent .keywordsgroup {
        position: absolute;
        top: 700px;
        left: 300px;
        display: flex;
        
    }

    .homeContent .keywordsgroup .textElipse {
        position: relative;
        color: #374785;
        top: 10px;
        font-size: 20px;
    }

    .homeContent .keywordsgroup .yellowSVG {
        position: relative;
        filter: invert(22%) sepia(73%) saturate(677%) hue-rotate(195deg) brightness(95%) contrast(88%);
        width: 100px;
        height: 100px;
        margin-left: -125px;
    }

    .homeContent .keywordsgroup div {
        position: relative;
        width: 300px;
    }

    .homeContent .keywordsgroup .group1 #elearningsvg {
        width: 77px;
        height: 70px;
        margin-left: -118px;
    }

    .homeContent .keywordsgroup .group1 p {
        right: -32px;
    }

    .homeContent .keywordsgroup .group2 p {
        right: -25px;
    }

    .homeContent .keywordsgroup .group3 p {
        right: -15px;
    }

    .homeContent .keywordsgroup .group4 p {
        right: -15px;
    }

    .homeContent .buttonPlay {
        margin: 20px 0px 100px 20px;
        font-size: 25px;
        padding: 4px 50px 8px 50px;

        background-color: #ffffff;
        color: #374785;
        border-color: #374785;
        border: 3px solid;
    }

    .homeContent .buttonPlay:hover {
        background-color: #374785 !important;
        color: white !important;
        border: 3px solid #374785;
    }

    .homeContent .videoRow {
        margin: 100px 0px 300px 0px;
    }

    .homeContent .videoText {
        margin: 0px 0px 0px 0px;
        color: #24305E;
    }

    .homeContent .videoText .title {
        margin: 0px 0px 60px 0px;
        font-size: 38px;
    }

    .homeContent .videoText .text {
        line-height: 35px;
        font-size: 15px;
        margin: 0px 30px 40px 0px;
    }

    .homeContent iframe {
        width: 500px;
        height: 276px;
    } 



</style>