import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';

@ApiTags('empleados')
@Injectable()
export class EmpleadosService {
  constructor(@InjectRepository(Empleado) private empleadosRepository: Repository<Empleado>) {}

  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const existe = await this.empleadosRepository.findOneBy({
      persona: {
        ci: createEmpleadoDto.idPersona,
        nombres: createEmpleadoDto.idPersona,
        paterno: createEmpleadoDto.idPersona,
        materno: createEmpleadoDto.idPersona,
      },
    });

    if (existe) {
      throw new ConflictException('El empleado ya existe');
    }

    return this.empleadosRepository.save({
      fechaContrato: createEmpleadoDto.fechaContrato,
      persona: {
        ci: createEmpleadoDto.idPersona,
        nombres: createEmpleadoDto.idPersona,
        paterno: createEmpleadoDto.idPersona,
        materno: createEmpleadoDto.idPersona,
        direccion: createEmpleadoDto.idPersona,
        telefono: createEmpleadoDto.idPersona,
      },
    });
  }

  async findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find({ relations: ['persona'] });
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
