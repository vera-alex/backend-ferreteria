<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const ci = ref('')
const nombres = ref('')
const paterno = ref('')
const materno = ref('')
const email = ref('')
const celular = ref('')

async function crearCliente() {
  await http
    .post(ENDPOINT, {
      ci: ci.value,
      nombres: nombres.value,
      paterno: paterno.value,
      materno: materno.value,
      email: email.value,
      celular: celular.value
    })
    .then(() => router.push('/clientes'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/clientes">Clientes</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Cliente</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearCliente">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="ci"
            placeholder="Cedula Identidad"
            required
          />
          <label for="ci">Cedula Identidad</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="nombres"
            placeholder="Nombres"
            required
          />
          <label for="nombres">Nombres</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="paterno"
            placeholder="Apellido Paterno"
            required
          />
          <label for="paterno">Apellido Paterno</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="materno"
            placeholder="Apellido Materno"
            required
          />
          <label for="materno">Apellido Materno</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="email" placeholder="Email" required />
          <label for="email">Email</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="celular"
            placeholder="Celular"
            required
          />
          <label for="celular">Celular</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Crear
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style scoped></style>
