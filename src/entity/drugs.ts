import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, ManyToOne, JoinColumn, Double } from "typeorm";

@Entity("drugs")
export class Drugs {
  @PrimaryColumn({name:"id"})
  id: number;

  @Column({name:"serial_number"})
  serial_number: string;

  @Column({name:"drug_name"})
  drug_name: string;

  @Column({name:"box_price"})
  box_price: number;

  @Column({name:"supplier"})
  supplier: string;

  @Column({name:"inventory"})
  inventory: number;

  @Column({name:"discount"})
  discount: number;
}

// route -> index.ts -> services -> doa/ -> controller -> repository -> entity

