import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

  export class CreateMarcasDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    @IsNotEmpty()
    @IsNumber()
    marca_id: number;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
  
    @IsNotEmpty()
    @IsNumber()
    user_id: number;
  }
  