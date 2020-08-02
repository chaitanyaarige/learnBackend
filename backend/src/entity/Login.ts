import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, ManyToOne, JoinColumn, Double, OneToMany, OneToOne, Timestamp } from "typeorm";

@Entity("login")
export class Login {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"email"})
  email: string;

  @Column({name:"password"})
  password: string;

  @Column('timestamp')
  created_at: Timestamp;
}

