import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, , FindOneOptions } from 'typeorm';
import { Marca } from './marcas.controller';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcasRepository: Repository<Marca>,
  ) {}

  async create(marcaData: Partial<Marca>): Promise<Marca> {
    const marca = this.marcasRepository.create(marcaData);
    return this.marcasRepository.save(marca);
  }

  async findAll(): Promise<Marca[]> {
    return this.marcasRepository.find();
  }

  async findOne(id: number): Promise<Marca> {
    return this.marcasRepository.findOne(id);
  }

  async update(id: number, marcaData: Partial<Marca>): Promise<Marca> {
    await this.marcasRepository.update(id, marcaData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.marcasRepository.delete(id);
  }
}

