<template>
  <div>
    <div class="navbar">
      <div class="logozone">
        <img class="logobg" src="../assets/logoshape.svg" alt="logo back" />
        <img class="logo" src="../assets/logo1.png" alt="emochamp logo" />
      </div>
      <ul class="navlinks">
        <li>
        <a class="curretpage" href="#home">HOME</a>
        </li>
        <li>
        <a href="#news">JOGAR</a>
        </li>
        <li>
        <a href="#contact">PERFIL</a>
        </li>
        <li>
        <a href="#about">ESTATISTICAS</a>
        </li>
        <div class="btns">
        <li>
        <button id="btn1">ENTRAR</button>
        </li>
        <li>
        <button id="btn2">REGISTAR</button>
        </li>
        </div>
        </ul>
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
  display:flex;
  justify-content: space-around;
  margin-top: 25px;
  margin-right: 125px;
  overflow: hidden;
}
.navlinks li{
  list-style: none;
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
  right: 245px;
  background-color: #ffffff;
  border: 3px solid #374785;
  border-radius: 5px;
  top: 24px;
  padding: 10px 30px;
  color: #24305e;
  text-align: center;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  font-size: 15px;
  text-decoration: none;
}
.navbar .btns #btn2 {
  right: 75px;
  background-color: #374785;
  border: 3px solid #374785;
  border-radius: 5px;
  top: 24px;
  padding: 10px 30px;
  color: #ffffff;
  text-align: center;
  font-family: Comfortaa_Regular, Playfair_Regular, Arial;
  font-size: 15px;
  text-decoration: none;
}
.btns{
  display:flex;
  justify-content: space-around;
}
#btn2{
  margin-left: 10px;
  margin-right: 0;
}
</style>
