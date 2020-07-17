import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"category_name"})
  category_name: string;
}
