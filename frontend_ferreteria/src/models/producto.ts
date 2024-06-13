import type { Categoria } from './categoria'

export interface Producto {
  id: number
  codigo: string
  nombre: string
  marca: string
  tipoUnidad: string
  precio: number
  stock: number
  categoria: Categoria
}
