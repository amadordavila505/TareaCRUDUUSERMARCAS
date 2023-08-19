import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MarcasService } from './marcas/marcas.service';

import { Marca } from './marcas.entity';

@Controller('marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Post()
  create(@Body() marcaData: Partial<Marca>): Promise<Marca> {
    return this.marcasService.create(marcaData);
  }

  @Get()
  findAll(): Promise<Marca[]> {
    return this.marcasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Marca> {
    return this.marcasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() marcaData: Partial<Marca>): Promise<Marca> {
    return this.marcasService.update(id, marcaData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.marcasService.remove(id);
  }
}
export { Marca };

