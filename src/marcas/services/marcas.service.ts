import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Marca } from "../entities/marcas.entity";
import { Repository } from "typeorm";
import { CreateMarcaDto } from "../dto/marcas.dto";

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ) {}

  async create(createMarcaDto: CreateMarcaDto): Promise<Marca> {
    const marca = new Marca();
    marca.name = createMarcaDto.name;
    marca.description = createMarcaDto.description;
    // Setear otros campos

    return await this.marcaRepository.save(marca);
  }

  async findAll(): Promise<Marca[]> {
    return await this.marcaRepository.find();
  }

  async findOne(id: number): Promise<Marca> {
    return await this.marcaRepository.findOneBy({id});
  }

  async update(id: number, updateMarcaDto: CreateMarcaDto): Promise<Marca> {
    const marca = await this.marcaRepository.findOneBy({id});
    if (!marca) {
      // Manejo de error si no se encuentra la marca
    }

    marca.name = updateMarcaDto.name;
    marca.description = updateMarcaDto.description;
    // Actualizar otros campos

    return await this.marcaRepository.save(marca);
  }

  async remove(id: number): Promise<void> {
    await this.marcaRepository.delete(id);
  }
}
