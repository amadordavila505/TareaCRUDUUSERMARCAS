import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './marcas/marcas.entity';
import { MarcasController } from './marcas/marcas.controller';
import { MarcasService } from './marcas/marcas.service';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Marca])],
  controllers: [MarcasController],
  providers: [MarcasService],
})
export class MarcasModule {}
