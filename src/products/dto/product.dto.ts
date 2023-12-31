import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
  //los decoradores en el dto validan que la informacion agregada sea correcta

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
  
  @IsNotEmpty()
  @IsNumber()
  Product_id: number;
}
