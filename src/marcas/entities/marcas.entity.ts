import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Marca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'varchar', length: 100, nullable: false })
  description: string;
  }

