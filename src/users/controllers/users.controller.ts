import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { UsersService } from '../services/users.services';
import { CreateUserDto } from "../dto/user.dto";
import { User } from "../entities/user.entity";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
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
    @Body() CreateUserDto: CreateUserDto,
  )
  {
    return this.usersService.update(id, CreateUserDto)
  }
}
