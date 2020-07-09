import { Entity, PrimaryGeneratedColumn, OneToOne, PrimaryColumn, Column, ManyToOne, JoinColumn, Double } from "typeorm";
import { Drugs } from  "./Drugs"

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn({name:"id"})
  id: number;

  @Column({name:"serial_number"})
  serial_number: string;

  @Column({name:"category_name"})
  category_name: string;


  @JoinColumn({name:"id"})
  @OneToOne(type => Drugs,drug=>drug.id)
  drugs: Drugs;
}
