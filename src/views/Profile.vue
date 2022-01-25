<template>
    <div>
        <Navbar />

        <div class="perfilImg">
            <img id="pagemarker" src="../assets/activepagemarker.svg" alt="marker" />
            <img id="redBaloonTop" src="../assets/redelipse.svg" alt="Red Baloon" style="margin-top: 60px" />
        </div>

        <div class="perfil">
            <b-container class="perfilContainer">
                <div class="perfilRowBadge">
                    <b-row align-content="center">
                        <b-col>
                            <img class="perfilIcon" src="../assets/Badges/Group190.svg" alt="perfilIcon">
                            <span class="perfilSpan">user777</span>
                        </b-col>

                        <b-col cols="8" class="perfilAbout">
                            <p class="perfilTag">Sobre mim:</p>
                            <textarea name="" id="" cols="50" rows="5"></textarea>
                        </b-col>
                    </b-row>

                    <div class="perfilRow">

                        <b-row>
                            <b-col class="perfilDataName">
                                <p>
                                    Nome Completo:
                                </p>
                            </b-col>
                            <b-col class="perfilDataNameValue">
                                <p>
                                    Pedro Miguel Rodrigues
                                </p>
                            </b-col>
                            <b-col>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col class="perfilDataEmail">
                                <p>
                                    Email:
                                </p>
                            </b-col>
                            <b-col class="perfilDataEmailValue">
                                <p>
                                    pedrorodrigues@example.com
                                </p>
                            </b-col>
                            <b-col>
                                <b-button type="button" variant="outline-primary" size="lg" class="buttonPlay">
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
                            <img src="../assets/seta-left.svg" class="nextFoto">
                        </b-col>
                        <b-col sm>
                            <img class="gameFoto" src="../assets/Badges/Group179.svg">
                        </b-col>
                        <b-col sm>
                            <img class="gameFoto" src="../assets/Badges/Group190.svg">
                        </b-col>
                        <b-col sm>
                            <img class="gameFoto" src="../assets/Badges/Group198.svg">
                        </b-col>
                        <b-col sm align-self="center">
                            <img src="../assets/seta-right.svg" class="nextFoto">
                        </b-col>
                    </b-row>
                </div>
            </b-container>

           <div class="modalEditarPerfil">
               <!--

                   ESCREVER MODAL AQUI!!!

               ───▐▀▄───────▄▀▌───▄▄▄▄▄▄▄─────────────
               ───▌▒▒▀▄▄▄▄▄▀▒▒▐▄▀▀▒██▒██▒▀▀▄──────────
               ──▐▒▒▒▒▀▒▀▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄────────
               ──▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▒▒▒▒▒▒▒▒▀▄──────
               ▀█▒▒▒█▌▒▒█▒▒▐█▒▒▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌─────
               ▀▌▒▒▒▒▒▒▀▒▀▒▒▒▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐───▄▄
               ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌▄█▒█
               ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒█▀─
               ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀───
               ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌────
               ─▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐─────
               ─▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌─────
               ──▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐──────
               ──▐▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▌──────
               ────▀▄▄▀▀▀▀▀▄▄▀▀▀▀▀▀▀▄▄▀▀▀▀▀▄▄▀──────── 
               -->
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


    export default {
        components: {
            Navbar,
            FooterX,
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
        color: #24305E;
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
        margin: 0px 0px 0px 35px;
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
        background-color: #F9F9F9;
    }

    .perfil .perfilCarousel .perfilCarouselRow .perfilCarouselTitle {
        color: #24305E;
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


</style>