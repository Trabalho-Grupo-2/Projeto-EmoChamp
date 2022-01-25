<template>
    <div>
        <Navbar />

        <img id="redBaloonTop" src="../assets/redelipse.svg" alt="Red Baloon" style="margin-top: 60px" />

        <div class="perfil">
            <b-container class="perfilContainer">
                <div class="perfilRowBadge">
                    <b-row align-content="center">
                        <b-col>
                            <img class="perfilIcon" src="../assets/Badges/Group190.svg" alt="perfilIcon">
                            <span class="perfilSpan">{{getLoggedUser.name}}</span>
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
                    <b-row align-h="center" class="perfilCarouselRow">
                        <b-col cols="2">
                            <p class="perfilCarouselTitle">Badges</p>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="2">

                        </b-col>

                        <div class="perfilBadgeGroup">
                            <b-col cols="2">
                                <div class="perfilBadge01"></div>
                            </b-col>
                            <b-col cols="2">
                                <div class="perfilBadge02"></div>
                            </b-col>
                            <b-col cols="2">
                                <div class="perfilBadge03"></div>
                            </b-col>
                        </div>

                        <b-col cols="2">

                        </b-col>
                    </b-row>
                </div>
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
        components: {
            Navbar,
            FooterX,
        },
        computed: {
            ...mapGetters([
                'getLoggedUser',
            ])
        },
    };
</script>

<style>
    #redBaloonTop {
        margin-top: 60px;
        top: 200px;
        position: absolute;
    }

    .perfil {
        color: #24305E;
    }

    .perfil .perfilContainer {
        margin: 50px 50px 200px 50px;
    }

    .perfil .perfilContainer .perfilRowBadge {
        margin: 100px 100px 200px 300px;
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
        margin: 100px 100px 200px 100px;

    }

    .perfil .perfilCarousel .perfilCarouselRow {
        background-color: #F9F9F9;
    }

    .perfil .perfilCarousel .perfilCarouselRow .perfilCarouselTitle {
        color: #24305E;
        font-size: 27px;
    }

    .perfil .perfilCarousel .perfilCarouselRow .perfilBadge01 {
        background-image: url("../assets/Badges/Group179.svg");
        background-size: cover;
        background-position: center;
    }

    .perfil .perfilCarousel .perfilCarouselRow .perfilBadge02 {
        width: 100px;
        height: 100px;
        background-image: url("../assets/Badges/Group182.svg");
        background-size: cover;
        background-position: center;
    }

    .perfil .perfilCarousel .perfilCarouselRow .perfilBadge03 {
        width: 100px;
        height: 100px;
        background-image: url("../assets/Badges/Group198.svg");
        background-size: cover;
        background-position: center;
    }

</style>