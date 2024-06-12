<script setup lang="ts">
import type { Proveedor } from '@/models/proveedor'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var proveedores = ref<Proveedor[]>([])

async function getProveedores() {
  proveedores.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/proveedores/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Proveedor?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getProveedores())
  }
}

onMounted(() => {
  getProveedores()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Proveedores</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Proveedores</h2>
      <div class="col-12">
        <RouterLink to="/proveedores/crear"
          ><font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo</RouterLink
        >
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">NIT</th>
            <th scope="col">Razón Social</th>
            <th scope="col">Dirección</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(proveedor, index) in proveedores.values()" :key="proveedor.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ proveedor.nit }}</td>
            <td>{{ proveedor.razonSocial }}</td>
            <td>{{ proveedor.direccion }}</td>
            <td>{{ proveedor.telefono }}</td>
            <td>{{ proveedor.email }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(proveedor.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(proveedor.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
