import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateProductDto } from "../dto/product.dto";
import { ProdctsService } from "../services/products.service";

@Controller ('product')
export class ProductsController {
    constructor(private readonly productsServices: ProdctsService){}

    @Post()
    async create(@Body() productDto: CreateProductDto){
        return await this.productsServices.create(productDto)
    }

    @Get()
    findAll() {
      return this.productsServices.findAll();
    }
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
      return this.productsServices.findOne(id);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: number) {
      return this.productsServices.remove(id);
    }
  
    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, 
    @Body()CreateProductDto: CreateProductDto)
     {
      return this.productsServices.update(id, CreateProductDto);
    }
  }
  
   
  