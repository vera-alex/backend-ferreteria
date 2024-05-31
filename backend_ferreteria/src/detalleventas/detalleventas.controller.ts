import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleventasService } from './detalleventas.service';
import { CreateDetalleventaDto } from './dto/create-detalleventa.dto';
import { UpdateDetalleventaDto } from './dto/update-detalleventa.dto';

@Controller('detalleventas')
export class DetalleventasController {
  constructor(private readonly detalleventasService: DetalleventasService) {}

  @Post()
  create(@Body() createDetalleventaDto: CreateDetalleventaDto) {
    return this.detalleventasService.create(createDetalleventaDto);
  }

  @Get()
  findAll() {
    return this.detalleventasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleventasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleventaDto: UpdateDetalleventaDto) {
    return this.detalleventasService.update(+id, updateDetalleventaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleventasService.remove(+id);
  }
}
