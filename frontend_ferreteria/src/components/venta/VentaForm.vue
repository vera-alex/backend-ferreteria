<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const clientes = ref([])
const productos = ref([])
const idCliente = ref('')
const montoPago = ref(0)
const montoCambio = ref(0)
const productosSeleccionados = ref([{ idProducto: '', cantidad: 0, precio: 0 }])

// Lógica para cargar clientes y productos desde el backend
// Asumiendo que tienes métodos para cargar clientes y productos desde el backend

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

    await http.post('/ventas', venta)
    router.push('/ventas') // Redirigir a la lista de ventas después de registrar
  } catch (error) {
    console.error('Error al registrar la venta:', error)
    // Manejo de errores
  }
}
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

      <div class="form-group">
        <label for="monto_pago">Monto Pago</label>
        <input
          v-model="montoPago"
          type="number"
          step="0.01"
          min="0"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="monto_cambio">Monto Cambio</label>
        <input
          v-model="montoCambio"
          type="number"
          step="0.01"
          min="0"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Registrar Venta</button>
    </form>
  </div>
</template>

<style scoped></style>
