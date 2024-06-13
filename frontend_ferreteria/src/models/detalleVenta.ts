import type { Producto } from './producto'
import type { Venta } from './venta'

export interface DetalleVenta {
  id: number
  precio: number
  cantidad: number
  subtotal: number
  venta: Venta
  producto: Producto
}
