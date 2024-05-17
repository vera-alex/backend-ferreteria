import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona) private interpretesRepository: Repository<Persona>,
  ) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const existe = await this.interpretesRepository.findOneBy({
      nombres: createPersonaDto.nombres.trim(),
      paterno: createPersonaDto.paterno.trim(),
    });

    if (existe) {
      throw new ConflictException('El intérprete ya existe');
    }

    return this.interpretesRepository.save({
      nombre: createPersonaDto.nombre.trim(),
      nacionalidad: createPersonaDto.nacionalidad.trim(),
    });
  }

  async findAll(): Promise<Persona[]> {
    return this.interpretesRepository.find();
  }

  async findAllByGenero(idGenero: number): Promise<Persona[]> {
    return this.interpretesRepository
      .createQueryBuilder('interpretes')
      .innerJoin('interpretes.albumes', 'albumes')
      .innerJoin('albumes.canciones', 'canciones')
      .innerJoin('canciones.genero', 'genero')
      .where('genero.id = :idGenero', { idGenero })
      .getMany();
  }

  async findOne(id: number): Promise<Persona> {
    const interprete = await this.interpretesRepository.findOneBy({ id });
    if (!interprete) {
      throw new NotFoundException(`El intérprete ${id} no existe`);
    }
    return interprete;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    const interprete = await this.findOne(id);
    const interpreteUpdate = Object.assign(interprete, updatePersonaDto);
    return this.interpretesRepository.save(interpreteUpdate);
  }

  async remove(id: number) {
    const interprete = await this.findOne(id);
    return this.interpretesRepository.delete(interprete.id);
  }
}
