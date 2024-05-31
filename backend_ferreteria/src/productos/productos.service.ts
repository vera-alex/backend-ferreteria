import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@ApiTags('productos')
@Injectable()
export class ProductosService {
  constructor(@InjectRepository(Producto) private productosRepository: Repository<Producto>) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const existe = await this.productosRepository.findOneBy({
      codigo: createProductoDto.codigo.trim(),
      nombre: createProductoDto.nombre.trim(),
    });

    if (existe) {
      throw new ConflictException('El Producto ya existe');
    }

    return this.productosRepository.save({
      codigo: createProductoDto.codigo.trim(),
      nombre: createProductoDto.nombre.trim(),
      marca: createProductoDto.marca.trim(),
      unidadMedida: createProductoDto.unidadMedida.trim(),
      precio: createProductoDto.precio,
      stock: createProductoDto.stock,
    });
  }

  async findAll(): Promise<Producto[]> {
    return this.productosRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productosRepository.findOneBy({ id });
    if (!producto) {
      throw new NotFoundException(`El producto ${id} no existe`);
    }
    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);
    const productoUpdate = Object.assign(producto, updateProductoDto);
    return this.productosRepository.save(productoUpdate);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    return this.productosRepository.delete(producto.id);
  }
}
