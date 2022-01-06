<template>
    <div>

        <div class="footer">
        
            <div class="logoGroup">
                <img class="logo" src="../assets/logo1.png" alt="emochamp logo" />
            </div>
        
            <div class="footerInfo">
                <div class="location">
                    <img class="infoImg" src="https://via.placeholder.com/30">
                    Rua D. Sancho I n.º 981 4480-876 Vila do Conde
                </div>
                <div class="number">
                    <img class="infoImg" src="https://via.placeholder.com/30">
                    +351 252 291 700
                </div>
                <div class="email">
                    <img class="infoImg" src="https://via.placeholder.com/30">
                    emochamp@gmail.com
                </div>
            </div>
        
            <div class="footerSocial">
                <img class="socialImg" src="https://via.placeholder.com/50">
                <img class="socialImg" src="https://via.placeholder.com/50">
                <img class="socialImg" src="https://via.placeholder.com/50">
                <img class="socialImg" src="https://via.placeholder.com/50">
            </div>

            <div class="footerCopyRight">
                Copyright © 2021 EmoChamp
            </div>

        </div>

    </div>
</template>

<script>
export default {

};
</script>

<style>

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


.footer {
    margin: 0px;
    width: 100%;
    height: 550px;
    background-color: #24305E;
    align-items: center;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-family: Comfortaa_Regular, Playfair_Regular, Arial;
}

.footer .logo {
    width: 180px;
    height: 39.39px;
    left: 109px;
    top: 33px;
    margin-top: 50px;
}

.footer .footerInfo {
    padding: 70px;
}

.footer .footerInfo .infoImg {
    margin-right: 25px;
    margin-bottom: 15px;
}

.footer .footerSocial .socialImg {
    margin-left: 60px;
    margin-bottom: 70px;
}
</style>