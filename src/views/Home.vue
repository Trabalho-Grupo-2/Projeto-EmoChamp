<template>
    <div>
        <Navbar />

        <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
        <img id="redBaloon" src="../assets/redelipse.svg" alt="Red Baloon" style="margin-top: 60px" />
        <img id="bluebg" src="../assets/homebackground.svg" alt="marker" />

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
                    <div class="group1">
                        <img class="yellowelipse" src="../assets/keywordssphere.svg" alt="yellow elipse" />
                        <img id="elearningsvg" src="../assets/Landing Page Balloons/eLearning.svg"
                            alt="eLearning icon" />
                        <p>eLearning</p>
                    </div>
                    <div class="group2">
                        <img class="yellowelipse" src="../assets/keywordssphere.svg" alt="yellow elipse" />
                        <img id="childsafesvg" src="../assets/Landing Page Balloons/Child Safe.svg"
                            alt="child safe icon" />
                        <p>
                            Seguro para <br />
                            Crianças
                        </p>
                    </div>
                    <div class="group3">
                        <img class="yellowelipse" src="../assets/keywordssphere.svg" alt="yellow elipse" />
                        <img id="gamificationsvg" src="../assets/Landing Page Balloons/gamification.svg"
                            alt="controller icon" />
                        <p>
                            Elementos de <br />
                            Gamificação
                        </p>
                    </div>
                    <div class="group4">
                        <img class="yellowelipse" src="../assets/keywordssphere.svg" alt="yellow elipse" />
                        <img id="supervisedlearningsvg" src="../assets/Landing Page Balloons/supervisedLearning.svg"
                            alt="supervised icon" />
                        <p>
                            Aprendizagem <br />
                            Supervisionada
                        </p>
                    </div>
                </b-row>

                <b-row>

                </b-row>
            </b-container>

        </div>
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
    #redBaloon {
        margin-top: 60px;
        top: 500px;
        position: absolute;
    }

    #bluebg {
        position: absolute;
        width: 1540px;
        height: 705px;
        right: 0px;
        top: -80px;
        z-index: -2;
    }

    #pagemarker {
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

    .homeContent .keywordsgroup .group1 {
        position: relative;
        width: 300px;
    }

    .homeContent .keywordsgroup .group1 #elearningsvg {
        position: relative;
        width: 77px;
        height: 70px;
        margin-left: -118px;
        filter: invert(22%) sepia(73%) saturate(677%) hue-rotate(195deg) brightness(95%) contrast(88%);
    }

    .homeContent .keywordsgroup .group1 p {
        position: relative;
        color: #374785;
        font-size: 20px;
        right: -32px;
        top: 10px;
    }

    .homeContent .keywordsgroup .group2 {
        position: relative;
        width: 300px;
    }

    .homeContent .keywordsgroup .group2 #childsafesvg {
        position: relative;
        width: 100px;
        height: 100px;
        margin-left: -125px;
        filter: invert(22%) sepia(73%) saturate(677%) hue-rotate(195deg) brightness(95%) contrast(88%);
    }

    .homeContent .keywordsgroup .group2 p {
        position: relative;
        color: #374785;
        font-size: 20px;
        right: -25px;
        top: 10px;
        text-align: justify;
    }

    .homeContent .keywordsgroup .group3 {
        position: relative;
        width: 300px;
    }

    .homeContent .keywordsgroup .group3 #gamificationsvg {
        position: relative;
        width: 100px;
        height: 100px;
        margin-left: -125px;
        filter: invert(22%) sepia(73%) saturate(677%) hue-rotate(195deg) brightness(95%) contrast(88%);
    }

    .homeContent .keywordsgroup .group3 p {
        position: relative;
        color: #374785;
        font-size: 20px;
        right: -15px;
        top: 10px;
        text-align: justify;
    }

    .homeContent .keywordsgroup .group4 {
        position: relative;
        width: 300px;
    }

    .homeContent .keywordsgroup .group4 #supervisedlearningsvg {
        position: relative;
        width: 100px;
        height: 100px;
        margin-left: -125px;
        filter: invert(22%) sepia(73%) saturate(677%) hue-rotate(195deg) brightness(95%) contrast(88%);
    }

    .homeContent .keywordsgroup .group4 p {
        position: relative;
        color: #374785;
        font-size: 20px;
        right: -15px;
        top: 10px;
    }
</style>