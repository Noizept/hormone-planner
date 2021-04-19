import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 25 })
  username: string;

  @Column({ length: 320 })
  email: string;

  @CreateDateColumn()
  createdAt: string;
}
