import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, ManyToOne, JoinColumn, Double } from "typeorm";

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"serial_number"})
  serial_number: string;

  @Column({name:"category_name"})
  category_name: string;
}

