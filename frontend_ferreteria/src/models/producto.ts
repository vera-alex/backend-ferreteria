import type { Categoria } from './categoria'

export interface Producto {
  id: number
  codigo: string
  nombre: string
  marca: string
  unidadMedida: string
  precio: number
  stock: number
  categoria: Categoria
}
