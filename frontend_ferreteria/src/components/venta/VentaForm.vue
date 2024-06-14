<script setup lang="ts"></script>

<template>
  <div class="conteiner">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Ventas</li>
      </ol>
    </nav>
  </div>

  <div class="row">
    <h2>Ventas</h2>
    <div class="col-12">
      <RouterLink to="/proveedores/crear"
        ><font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo</RouterLink
      >
    </div>
  </div>
</template>

<style scoped></style>
