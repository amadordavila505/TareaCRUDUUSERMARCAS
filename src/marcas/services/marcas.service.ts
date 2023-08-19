import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MarcasController } from "../controllers/marcas.controllers";
import { Repository } from "typeorm/repository/Repository";
import { CreateMarcasDto } from "../dto/marcas.dto";
import { Marcas } from '../entities/marcas.entity';
import { Any } from "typeorm";

@Injectable()
export class MarcasService {
  public get marcasRepo(): Repository<Marcas> {
    return this.marcasRepo;
  }
  constructor(
    @InjectRepository(MarcasController)
    private readonly _marcasRepo: Repository<Marcas>,
  ) {}

  async create(createMarcasDto: CreateMarcasDto): Promise<any> {
    const user = this.marcasRepo.create(createMarcasDto);
    return this.marcasRepo.save(Marcas);
  }
  findOne(id: number) {
    return this.marcasRepo.findOneBy({id});
  }
  

  async findAll() {
    return this.marcasRepo.find({
      order: { id: 'ASC' },
    });
  }

  async remove(id: number) {
    const product = await this.findOne(id); // Usa el método findOne
    await this.marcasRepo.remove(Marcas);
    return 'Producto eliminado satisfactoriamente';
  }

  async update(id: number, cambios: CreateMarcasDto) { 
    const olMarcas = await this.findOne(id); 
    const updatedMarcas = this.marcasRepo.merge(oldMarcas, cambios);
    return this.marcasRepo.save(updatedMarcas);
  }
  }