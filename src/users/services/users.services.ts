import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepo.create(createUserDto);
    return this.usersRepo.save(user);
  }
  findOne(id: number) {
    return this.usersRepo.findOneBy({id});
  }
  

  async findAll() {
    return this.usersRepo.find({
      order: { id: 'ASC' },
    });
  }

  async remove(id: number) {
    const product = await this.findOne(id); // Usa el método findOne
    await this.usersRepo.remove(product);
    return 'Producto eliminado satisfactoriamente';
  }

  async update(id: number, cambios: CreateUserDto) { 
    const oldProduct = await this.findOne(id); 
    const updatedProduct = await this.usersRepo.merge(oldProduct, cambios);
    return this.usersRepo.save(updatedProduct);
  }
  }

