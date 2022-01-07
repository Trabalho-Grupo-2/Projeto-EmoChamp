<template>
 <div>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-link navbar-light ">
  <!-- Container wrapper -->
  <div class="container-fluid">

    <!-- Navbar brand -->
    <a class="navbar-brand" href="#"><img id="logobg" src="../assets/logoshape.svg" alt="logo back" style="margin-top:-12.8px; margin-left:-11.8px;" /><img class="logo" src="../assets/logo1.png" style="width: 160px; height: 35.01px; margin-top:-22px; margin-left:-220px;" alt="emochamp logo" /></a>

    <!-- Collapsible wrapper -->
    <div class="navbar-collapse" id="navbarSupportedContent" style="margin-left:100px; margin-top:-22px;">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <!-- Link -->
        <li class="nav-item">
          <a class="nav-link" style="margin-left:30px; color:#24305e;" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="margin-left:30px; color:#24305e;" href="#">JOGAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="margin-left:30px; color:#24305e;" href="#">PERFIL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="margin-left:30px; color:#24305e;" href="#">ESTATÍSTICAS</a>
        </li>

      </ul>

    </div>
  </div>
  
  <button type="button" class="btn btn-outline-primary" id="btnEntrar" style="color:#374785; border-color: #374785; margin-top:-23px;">ENTRAR</button>
  &nbsp; &nbsp;&nbsp;
  <button type="button" class="btn btn-primary" id="btnRegistar" style="background-color:#374785; border-color:#374785; margin-top:-23px;">REGISTAR</button>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</nav>
<!-- Navbar -->

</div>
</template>

<script>
export default {
    
}
</script>

<style>
#btnRegistar:hover{
  background-color: white !important;
  color: #374785 !important;

}
#btnEntrar:hover{
  background-color: #374785 !important;
  color:  white !important;

}
.nav-link:hover{
  transform: scale(1.1) !important;
}
</style>