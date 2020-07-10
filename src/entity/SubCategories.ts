import { Entity, PrimaryGeneratedColumn, OneToOne, PrimaryColumn, Column, ManyToOne, JoinColumn, Double } from "typeorm";
import { Categories } from  "./Categories"

@Entity("subCategories")
export class SubCategories {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"sub_category_name"})
  sub_category_name: string;

  @JoinColumn({name:"category_id"})
  @OneToOne(type => Categories,category=>category.id)
  category: Categories;
}
