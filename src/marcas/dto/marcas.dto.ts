import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateMarcaDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
  
  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  description: string;
  // Otros campos según tus necesidades
}
