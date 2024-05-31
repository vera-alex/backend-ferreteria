import { Module } from '@nestjs/common';
import { DetallecomprasService } from './detallecompras.service';
import { DetallecomprasController } from './detallecompras.controller';

@Module({
  controllers: [DetallecomprasController],
  providers: [DetallecomprasService],
})
export class DetallecomprasModule {}
