<script setup lang="ts">
import type { Cliente } from '@/models/cliente'
import type { Producto } from '@/models/producto'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var clientes = ref<Cliente[]>([])
var productos = ref<Producto[]>([])

const idCliente = ref('')
const productosSeleccionados = ref([{ idProducto: '', cantidad: 0, precio: 0 }])

async function getClientes() {
  await http.get(`${ENDPOINT}/clientes`).then((response) => {
    clientes.value = response.data
  })
}

async function getProductos() {
  await http.get(`${ENDPOINT}/productos`).then((response) => {
    productos.value = response.data
  })
}

// Función para agregar un nuevo producto al detalle de ventas
function agregarProducto() {
  productosSeleccionados.value.push({ idProducto: '', cantidad: 0, precio: 0 })
}

// Función para eliminar un producto del detalle de ventas
function eliminarProducto(index: number) {
  productosSeleccionados.value.splice(index, 1)
}

// Función para registrar la venta
async function registrarVenta() {
  try {
    const detallesVenta = productosSeleccionados.value.map((producto) => ({
      id_producto: producto.idProducto,
      cantidad: producto.cantidad,
      precio: producto.precio,
      subtotal: producto.cantidad * producto.precio
    }))

    const venta = {
      monto_pago: montoPago.value,
      monto_cambio: montoCambio.value,
      total: detallesVenta.reduce((acc, curr) => acc + curr.subtotal, 0),
      id_usuario: localStorage.getItem('id_usuario'), // Obtener el ID del usuario desde el localStorage
      id_cliente: idCliente.value,
      detalles: detallesVenta
    }

    await http.post(`${ENDPOINT}/ventas`, venta).then(() => router.push('/ventas')) // Redirigir a la lista de ventas después de registrar
  } catch (error) {
    console.error('Error al registrar la venta:', error)
    // Manejo de errores
  }
}

onMounted(async () => {
  await getClientes()
  await getProductos()
})
</script>

<template>
  <div class="container">
    <h2>Registrar Venta</h2>

    <form @submit.prevent="registrarVenta">
      <div class="form-group">
        <label for="cliente">Cliente</label>
        <select v-model="idCliente" class="form-control" required>
          <option value="">Seleccionar Cliente</option>
          <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">
            {{ cliente.nombres }} {{ cliente.paterno }} {{ cliente.materno }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="productos">Productos</label>
        <div v-for="(producto, index) in productosSeleccionados" :key="index">
          <div class="row">
            <div class="col-md-4">
              <select v-model="producto.idProducto" class="form-control" required>
                <option value="">Seleccionar Producto</option>
                <option v-for="p in productos" :key="p.id" :value="p.id">
                  {{ p.nombre }} - {{ p.marca }}
                </option>
              </select>
            </div>
            <div class="col-md-2">
              <input
                v-model="producto.cantidad"
                type="number"
                min="1"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-2">
              <input
                v-model="producto.precio"
                type="number"
                step="0.01"
                min="0"
                class="form-control"
                required
              />
            </div>
            <div class="col-md-2">
              <input
                :value="producto.cantidad * producto.precio"
                type="number"
                step="0.01"
                class="form-control"
                disabled
              />
            </div>
            <div class="col-md-2">
              <button type="button" class="btn btn-danger" @click="eliminarProducto(index)">
                Eliminar
              </button>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-success mt-2" @click="agregarProducto">
          Agregar Producto
        </button>
      </div>
      <button type="submit" class="btn btn-primary">Registrar Venta</button>
    </form>
  </div>
</template>

<style scoped></style>
