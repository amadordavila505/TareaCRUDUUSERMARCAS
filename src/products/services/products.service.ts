import { Injectable } from '@nestjs/common';
import  {InjectRepository} from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import {Repository} from 'typeorm';
import { ProductsModule } from '../products.module';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProdctsService {
    productsRepo: any;
    constructor(
        @InjectRepository(Product)
        private readonly ProductsRepo: Repository  < Product>,
        
    ) {}
    async create (createProductDto: CreateProductDto){
        const product = this.ProductsRepo.create(createProductDto)
            await this.ProductsRepo.save(product)
          return product; 
          }
          
          async findOne(id: number) {
            return this.productsRepo.findOne(id); // Utiliza findOne con el ID directamente
          }
          
        
          async findAll() {
            return this.productsRepo.find({
              order: { id: 'ASC' },
            });
          }
        
          async remove(id: number) {
            const product = await this.findOne(id); // Usa el método findOne
            await this.productsRepo.remove(product);
            return 'Producto eliminado satisfactoriamente';
          }
        
          async update(id: number, cambios: CreateProductDto) { 
            const oldProduct = await this.findOne(id); 
            const updatedProduct = await this.productsRepo.merge(oldProduct, cambios);
            return this.ProductsRepo.save(updatedProduct);
          }
        }