import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Marcas {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'int4' })
  marcas_id: number;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @Column({ type: 'int8' })
  user_id: number;

  //relaciones
  @ManyToOne(()=>Marcas)
  @JoinColumn({
    name:'user_id', //este campo que relaciona ami tabla
    referencedColumnName: 'id',//este es del usuario
  }
  )
  autor: Marcas;
}
