import type { Cliente } from './cliente'
import type { Usuario } from './usuario'

export interface Venta {
  id: number
  total: number
  usuario: Usuario
  cliente: Cliente
}
