<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nit = ref('')
const razonSocial = ref('')
const direccion = ref('')
const telefono = ref('')
const email = ref('')
const id = router.currentRoute.value.params['id']

async function editarProveedor() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      nit: nit.value,
      razonSocial: razonSocial.value,
      direccion: direccion.value,
      telefono: telefono.value,
      email: email.value
    })
    .then(() => router.push('/proveedores'))
}

async function getProveedor() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(nit.value = response.data.nit),
      (razonSocial.value = response.data.razonSocial),
      (direccion.value = response.data.direccion),
      (telefono.value = response.data.telefono),
      (email.value = response.data.email)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getProveedor()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/proveedores">Proveedores</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Proveedor</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarProveedor">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nit" placeholder="NIT" required />
          <label for="nit">NIT</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="razonSocial"
            placeholder="Razón Social"
            required
          />
          <label for="razonSocial">Razón Social</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="direccion"
            placeholder="Dirección"
            required
          />
          <label for="direccion">Dirección</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="telefono"
            placeholder="Teléfono"
            required
          />
          <label for="telefono">Teléfono</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="email" placeholder="Email" required />
          <label for="email">Email</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Guardar
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
