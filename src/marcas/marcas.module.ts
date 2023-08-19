import { Module } from "@nestjs/common";
import { MarcasService } from "./services/marcas.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MarcasController } from "./controllers/marcas.controllers";

@Module({
    imports: [TypeOrmModule.forFeature([MarcasModule])],
    controllers: [MarcasController],
    providers: [MarcasService],
  })
  export class MarcasModule {}