import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@ApiTags('empleados')
@Injectable()
export class EmpleadosService {
  constructor(@InjectRepository(Empleado) private empleadosRepository: Repository<Empleado>) {}

  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const existe = await this.empleadosRepository.findOneBy({
      ci: createEmpleadoDto.ci.trim(),
      nombres: createEmpleadoDto.nombres.trim(),
      paterno: createEmpleadoDto.paterno.trim(),
      materno: createEmpleadoDto.materno.trim(),
    });

    if (existe) {
      throw new ConflictException('El empleado ya existe');
    }

    return this.empleadosRepository.save({
      ci: createEmpleadoDto.ci.trim(),
      nombres: createEmpleadoDto.nombres.trim(),
      paterno: createEmpleadoDto.paterno.trim(),
      materno: createEmpleadoDto.materno.trim(),
      email: createEmpleadoDto.email.trim(),
      direccion: createEmpleadoDto.direccion.trim(),
      celular: createEmpleadoDto.celular.trim(),
      rol: createEmpleadoDto.rol.trim(),
      fechaContrato: createEmpleadoDto.fechaContrato,
    });
  }

  async findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find();
  }

  async findOne(id: number): Promise<Empleado> {
    const empleado = await this.empleadosRepository.findOneBy({ id });
    if (!empleado) {
      throw new NotFoundException(`El empleado ${id} no existe`);
    }
    return empleado;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    const empleado = await this.findOne(id);
    const empleadoUpdate = Object.assign(empleado, updateEmpleadoDto);
    return this.empleadosRepository.save(empleadoUpdate);
  }

  async remove(id: number) {
    const empleado = await this.findOne(id);
    return this.empleadosRepository.delete(empleado.id);
  }
}
