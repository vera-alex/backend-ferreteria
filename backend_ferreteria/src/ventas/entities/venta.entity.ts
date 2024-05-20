import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('personas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;
  
  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaVenta: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  horaVenta: Date;

  @Column('varchar', { length: 7, nullable: true })
  totalVenta: string;
}
