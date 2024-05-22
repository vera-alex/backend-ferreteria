import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEmpleadoDto {
  @ApiProperty({ example: '2024-02-13' })
  @IsNotEmpty({ message: 'El campo fechaContrato no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fechaContrato debe ser de tipo fecha' })
  readonly fechaContrato: Date;
}
