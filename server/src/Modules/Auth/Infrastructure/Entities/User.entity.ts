import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { Role } from '~/src/Modules/Auth/Infrastructure/Entities/Role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  discord_id: string;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
}
