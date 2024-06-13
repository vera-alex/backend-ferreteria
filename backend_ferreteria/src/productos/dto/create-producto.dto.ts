import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProductoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo codigo no debe ser vacío' })
  @IsString({ message: 'El campo codigo debe ser de tipo cadena' })
  @MaxLength(10, { message: 'El campo codigo no debe ser mayor a 10 caracteres' })
  @MinLength(4, { message: 'El campo codigo no debe ser menor a 4 caracteres' })
  readonly codigo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombre no debe ser mayor a 50 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsString({ message: 'El campo marca debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo marca no debe ser mayor a 50 caracteres' })
  readonly marca: string;

  @IsNotEmpty({ message: 'El campo Unida Medida no debe ser vacío' })
  @IsString({ message: 'El campo Unida Medida debe ser de tipo cadena' })
  @MaxLength(10, { message: 'El campo Unida Medida no debe ser mayor a 10 caracteres' })
  readonly unidadMedida: string;

  @IsNotEmpty({ message: 'El campo precio no debe ser vacío' })
  @IsNumber({}, { message: 'El campo precio debe ser de tipo numero' })
  @MaxLength(10, { message: 'El campo precio no debe ser mayor a 10 number' })
  readonly precio: number;

  @IsNotEmpty({ message: 'El campo stock no debe ser vacío' })
  @IsNumber({}, { message: 'El campo stock debe ser de tipo numeral' })
  @MaxLength(3, { message: 'El campo Unida Medida no debe ser mayor a 3 caracteres' })
  readonly stock: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idCategoria debe estar definido' })
  @IsNumber({}, { message: 'El campo idCategoria debe ser de tipo numérico' })
  readonly idCategoria: number;
}
