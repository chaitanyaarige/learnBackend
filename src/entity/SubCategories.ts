import { Entity, PrimaryGeneratedColumn, OneToOne, PrimaryColumn, Column, ManyToOne, JoinColumn, Double, OneToMany } from "typeorm";
import { Categories } from  "./Categories"

@Entity("subCategories")
export class SubCategories {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"sub_category_name"})
  sub_category_name: string;

  @JoinColumn({ name:"category_id"})
  @ManyToOne(type => Categories,category=>category.id)
  categoryId: Categories;
}
