import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca} from './entities/marcas.entity';
import { MarcasService } from './services/marcas.service';
import { MarcasController } from './controllers/marcas.controllers';

@Module({
    imports: [TypeOrmModule.forFeature([Marca])],
    controllers: [MarcasController],
    providers: [MarcasService],
  })
  export class MarcasModule {}