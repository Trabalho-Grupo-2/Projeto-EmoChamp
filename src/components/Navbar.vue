<template>
  <div>
    <div class="navbar">
      <div class="logozone">
        <img class="logobg" src="../assets/logoshape.svg" alt="logo back" />
        <img class="logo" src="../assets/logo1.png" alt="emochamp logo" />
      </div>
      <div class="navlinks">
        <a class="curretpage" href="#home">HOME</a>
        <a href="#news">JOGAR</a>
        <a href="#contact">PERFIL</a>
        <a href="#about">ESTATISTICAS</a>
      </div>
      <div class="btns">
        <button id="btn1">ENTRAR</button>
        <button id="btn2">REGISTAR</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.navbar {
  margin: 0;
  width: 100%;
}
.navbar .logozone .logobg {
  position: absolute;
  width: 354.01px;
  height: 132.26px;
  left: -31px;
  top: -12px;
}
.navbar .logozone .logo {
  position: absolute;
  width: 160px;
  height: 35.01px;
  left: 109px;
  top: 33px;
}
.navbar .navlinks {
  position: absolute;
  left: 395px;
  top: 25px;
  overflow: hidden;
}
.navbar .navlinks a {
  float: left;
  color: #24305e;
  text-align: center;
  padding: 14px 45px;
  text-decoration: none;
  font-size: 15px;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
}
.navbar .navlinks a:hover,
.navbar .btns #btn1:hover,
.navbar .btns #btn2:hover {
  transform: scale(1.1);
}

.navbar .btns #btn1 {
  position: absolute;
  right: 275px;
  background-color: #ffffff;
  border: 3px solid #374785;
  border-radius: 5px;
  top: 23px;
  padding: 10px 30px;
  color: #24305e;
  text-align: center;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  font-size: 15px;
  text-decoration: none;
}
.navbar .btns #btn2 {
  position: absolute;
  right: 100px;
  background-color: #374785;
  border: 3px solid #374785;
  border-radius: 5px;
  top: 23px;
  padding: 10px 30px;
  color: #ffffff;
  text-align: center;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  font-size: 15px;
  text-decoration: none;
}
</style>
