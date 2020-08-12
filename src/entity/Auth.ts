import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("auth")
export class Auth {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name: 'password'})
  password: string;

  @Column({name: 'token'})
  token: string;

  @Column({name:"created_at"})
  created_at: Date;
}
