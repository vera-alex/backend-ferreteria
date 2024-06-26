<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/index'
const authStore = useAuthStore()
const location = useRoute()
</script>

<template>
  <!-- ***** Preloader Start ***** -->
  <div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- ***** Preloader End ***** -->

  <!-- Pre-header Starts -->
  <div class="pre-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8 col-7">
          <ul class="info">
            <li>
              <a href="#"><i class="fa fa-envelope"></i>todo.uno@gmail.com</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-phone"></i>64-23598</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-sm-4 col-5">
          <ul class="social-media">
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Pre-header End -->

  <!-- ***** Header Area Start ***** -->
  <header
    class="header-area header-sticky wow slideInDown"
    data-wow-duration="0.75s"
    data-wow-delay="0s"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <RouterLink to="/" class="logo">
              <img src="../assets/images/logo.png" alt="" width="70" height="70" />
            </RouterLink>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section">
                <RouterLink to="/" class="nav-link click-scroll">Inicio</RouterLink>
              </li>
              <slot v-if="authStore.token">
                <li class="scroll-to-section dropdown">
                  <a href="#" class="nav-link">Catálogos</a>
                  <ul class="dropdown-menu">
                    <li>
                      <RouterLink to="/categorias" class="nav-link click-scroll"
                        >Categorías</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink to="/productos" class="nav-link click-scroll"
                        >Productos</RouterLink
                      >
                    </li>
                  </ul>
                </li>
                <li class="scroll-to-section dropdown">
                  <a href="#" class="nav-link">Compras/Ventas</a>
                  <ul class="dropdown-menu">
                    <li>
                      <RouterLink to="/compras" class="nav-link click-scroll">Compras</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/ventas" class="nav-link click-scroll">Ventas</RouterLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <RouterLink to="/clientes" class="nav-link click-scroll">Clientes</RouterLink>
                </li>
                <li>
                  <RouterLink to="/proveedores" class="nav-link click-scroll"
                    >Proveedores</RouterLink
                  >
                </li>
                <li v-if="authStore.role == 'Administrador'" class="scroll-to-section dropdown">
                  <a href="#" class="nav-link">Administración</a>
                  <ul class="dropdown-menu">
                    <li>
                      <RouterLink to="/empleados" class="nav-link click-scroll"
                        >Empleados</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink to="/usuarios" class="nav-link click-scroll">Usuarios</RouterLink>
                    </li>
                  </ul>
                </li>
                <li class="scroll-to-section">
                  <div class="border-first-button">
                    <RouterLink
                      v-if="!authStore.token"
                      to="/login"
                      class="btn custom-btn d-lg-none ms-auto me-4"
                    >
                      Iniciar Sesión
                    </RouterLink>
                    <a
                      v-else
                      @click="authStore.logout()"
                      class="btn custom-btn d-lg-none ms-auto me-4"
                    >
                      Salir
                    </a>
                  </div>
                </li>
              </slot>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>

<style scoped>
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav li {
  position: relative;
  padding: 10px;
}

.nav .dropdown .dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.nav .dropdown:hover .dropdown-menu {
  display: block;
}

.nav .dropdown-menu li {
  padding: 10px;
}

.nav .dropdown-menu li a {
  color: black;
  text-decoration: none;
}

.nav .dropdown-menu li a:hover {
  background-color: #f8f8f8;
}
</style>
