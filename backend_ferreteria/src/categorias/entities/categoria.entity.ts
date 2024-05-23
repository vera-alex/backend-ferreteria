import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 25, nullable: false })
  nombre: string;

  @Column('varchar', { length: 100, nullable: false })
  descripcion: string;
}
