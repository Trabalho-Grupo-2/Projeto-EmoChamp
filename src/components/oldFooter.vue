<template>
  <div>
    <div class="footer">
      <div class="logoGroup">
        <img class="logo" src="../assets/logo1.png" alt="emochamp logo" />
      </div>

      <div class="footerInfo">
        <div class="location">
          <img class="infoImg" src="../assets/Social Icons/location.svg" />
          <p>Rua D. Sancho I n.º 981 4480-876 Vila do Conde</p>
        </div>
        <div class="contact">
          <img class="infoImg" src="../assets/Social Icons/contact.svg" />
          <p>+351 252 291 700</p>
        </div>
        <div class="email">
          <img class="infoImg" src="../assets/Social Icons/mail.svg" />
          <p>emochampion@gmail.com</p>
        </div>
      </div>

      <div class="footerSocial">
        <a href="https://www.instagram.com/">
          <img class="socialImg" src="../assets/social/instagram.svg" />
        </a>
        <a href="https://www.facebook.com/">
          <img class="socialImg" src="../assets/social/facebook.svg" />
        </a>
        <a href="https://github.com/Trabalho-Grupo-2/Projeto-EmoChamp">
          <img class="socialImg" src="../assets/social/github.svg" />
        </a>
        <a href="https://www.youtube.com/">
          <img class="socialImg" src="../assets/social/youtube.svg" />
        </a>
      </div>
      <div class="footerCopyRight">Copyright © 2021 EmoChamp</div>
    </div>
  </div>
</template>

<script>
export default {};
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
  width: 100%;
  height: 650px;
  background-color: #24305e;
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
  position: relative;
  top: -10px;
}

.footer .footerInfo .infoImg {
  position: relative;
  filter: invert(98%) sepia(59%) saturate(3404%) hue-rotate(302deg)
    brightness(128%) contrast(95%);
  width: 30px;
  height: 30px;
  top: 30px;
  left: -200px;
}

.footer .footerInfo p {
  position: relative;
  text-align: left;
  left: 540px;
  top: 2px;
  font-size: 14px;
}

.footer .footerSocial .socialImg {
  position: relative;
  margin-left: 60px;
  margin-bottom: 70px;
  left: -25px;
}
.footer .footerCopyRight {
  font-size: 15px;
}
</style>
