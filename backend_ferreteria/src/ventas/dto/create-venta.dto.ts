import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateVentaDto {
  @ApiProperty()
  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo fecha de venta no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fecha de venta debe ser de tipo fecha' })
  readonly fechaVenta: Date;

  @ApiProperty({ example: '10:50:20' })
  @IsNotEmpty({ message: 'El campo hora de venta no debe ser vacío' })
  @IsDateString({}, { message: 'El campo hora de venta debe ser de tipo fecha' })
  readonly horaVenta: Date;

  @ApiProperty()
  @IsString({ message: 'El campo total de venta debe ser numeral' })
  @MaxLength(7, { message: 'El campo total de venta no debe ser mayor a 7 caracteres' })
  @MinLength(1, { message: 'El campo total de venta no debe ser menor a 1 caracteres' })
  readonly totalVenta: string;
}
