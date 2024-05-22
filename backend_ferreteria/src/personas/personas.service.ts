import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('personas')
@Injectable()
export class PersonasService {
  constructor(@InjectRepository(Persona) private personasRepository: Repository<Persona>) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const existe = await this.personasRepository.findOneBy({
      ci: createPersonaDto.ci.trim(),
      nombres: createPersonaDto.nombres.trim(),
      paterno: createPersonaDto.paterno.trim(),
      materno: createPersonaDto.materno.trim(),
    });

    if (existe) {
      throw new ConflictException('La persona ya existe');
    }

    return this.personasRepository.save({
      ci: createPersonaDto.ci.trim(),
      nombres: createPersonaDto.nombres.trim(),
      paterno: createPersonaDto.paterno.trim(),
      materno: createPersonaDto.materno.trim(),
      direccion: createPersonaDto.direccion.trim(),
      telefono: createPersonaDto.telefono.trim(),
    });
  }

  async findAll(): Promise<Persona[]> {
    return this.personasRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
    const persona = await this.personasRepository.findOneBy({ id });
    if (!persona) {
      throw new NotFoundException(`La persona ${id} no existe`);
    }
    return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    const persona = await this.findOne(id);
    const personaUpdate = Object.assign(persona, updatePersonaDto);
    return this.personasRepository.save(personaUpdate);
  }

  async remove(id: number) {
    const persona = await this.findOne(id);
    return this.personasRepository.delete(persona.id);
  }
}
