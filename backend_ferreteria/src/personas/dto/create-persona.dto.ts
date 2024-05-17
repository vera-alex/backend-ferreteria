import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePersonaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombres no debe ser vacío' })
  @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombres no debe ser mayor a 50 caracteres' })
  @MinLength(3, { message: 'El campo nombres no debe ser menor a 3 caracteres' })
  readonly nombres: string;

  @ApiProperty()
  @IsString({ message: 'El campo paterno debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo paterno no debe ser mayor a 20 caracteres' })
  @MinLength(4, { message: 'El campo paterno no debe ser menor a 4 caracteres' })
  readonly paterno: string;

  @ApiProperty()
  @IsString({ message: 'El campo materno debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo materno no debe ser mayor a 20 caracteres' })
  @MinLength(4, { message: 'El campo materno no debe ser menor a 4 caracteres' })
  readonly materno: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion no debe ser vacío' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo direccion no debe ser mayor a 100 caracteres' })
  @MinLength(10, { message: 'El campo direccion no debe ser menor a 10 caracteres' })
  readonly direccion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion no debe ser vacío' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(15, { message: 'El campo direccion no debe ser mayor a 15 caracteres' })
  @MinLength(8, { message: 'El campo direccion no debe ser menor a 8 caracteres' })
  readonly telefono: string;
}
