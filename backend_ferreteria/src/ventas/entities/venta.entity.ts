import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  totalVenta: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaVenta: Date;

  @CreateDateColumn({ name: 'hora' })
  horaVenta: Date;

  @ManyToOne(() => Usuario, usuario => usuario.ventas)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuarios: Usuario;
}
