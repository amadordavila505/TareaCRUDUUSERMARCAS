import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MarcasService } from '../services/marcas.service';
import { CreateMarcasDto } from '../dto/marcas.dto';
import { CreateUserDto } from 'src/users/dto/user.dto';
type NewType = marcas;

@Controller('marcas')
export class MarcasController {
  constructor(private readonly usersService: MarcasService) {}

  @Post()
  create(@Body() createUserDto: CreateMarcasDto): Promise<NewType> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<NewType[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
  @Patch(':id')
  update (
    @Param ('id',ParseIntPipe) id: number,
    @Body() CreateMarcasDto: CreateMarcasDto,
  )
  {
    return this.usersService.update(id, CreateUserDto)
  }
  }