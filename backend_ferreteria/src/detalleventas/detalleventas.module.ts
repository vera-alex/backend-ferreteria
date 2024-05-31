import { Module } from '@nestjs/common';
import { DetalleventasService } from './detalleventas.service';
import { DetalleventasController } from './detalleventas.controller';

@Module({
  controllers: [DetalleventasController],
  providers: [DetalleventasService],
})
export class DetalleventasModule {}
