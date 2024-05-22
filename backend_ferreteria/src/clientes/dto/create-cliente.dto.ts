import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber } from "class-validator";

export class CreateClienteDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo idInterprete debe estar definido' })
  @IsNumber({}, { message: 'El campo idInterprete debe ser de tipo numérico' })
  readonly idPersona: number;
}
