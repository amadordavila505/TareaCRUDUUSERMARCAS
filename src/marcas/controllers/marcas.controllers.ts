import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { MarcasService } from "../services/marcas.service";
import { CreateMarcaDto } from "../dto/marcas.dto";
import { Marca } from "../entities/marcas.entity";


@Controller('marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Post()
  create(@Body() createMarcaDto: CreateMarcaDto): Promise<Marca> {
    return this.marcasService.create(createMarcaDto);
  }

  @Get()
  findAll(): Promise<Marca[]> {
    return this.marcasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Marca> {
    return this.marcasService.findOne(Number(id));
  }

  @Patch(':id') 
  update(@Param('id') id: string, @Body() updateMarcaDto: CreateMarcaDto): Promise<Marca> {
    return this.marcasService.update(Number(id), updateMarcaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.marcasService.remove(Number(id));
  }
}

