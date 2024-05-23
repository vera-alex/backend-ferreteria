import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo usario no debe ser vacío' })
  @IsString({ message: 'El campo usario debe ser de tipo cadena' })
  @MaxLength(12, { message: 'El campo usario no debe ser mayor a 12 caracteres' })
  @MinLength(4, { message: 'El campo usario no debe ser menor a 4 caracteres' })
  readonly usuario: string;
}
