import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'fecha_contrato' })
  fechaContrato: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}
